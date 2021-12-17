import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CouncilMeeting, CouncilMeetingDTO, CouncilMeetingYear} from "../models/CouncilMeeting.model";

@Injectable({
  providedIn: 'root'
})
export class CouncilMeetingService {
  public councilMeetingsByYear: CouncilMeetingYear[] = null;
  public yearlyCheckComplete = false;

  public get shownCouncilMeetingsByYear(): CouncilMeetingYear[] {
    const shownOnly: CouncilMeetingYear[] = [];
    this.councilMeetingsByYear.forEach((year) => {
      const shownYear = year.councilMeetings
        .filter(meeting => {
          return meeting.show;
        });
      shownOnly.push({councilMeetings: shownYear, year: year.year});
    });
    return shownOnly;
  }

  public get allCouncilMeetings(): CouncilMeeting[] {
    let _meetings: CouncilMeeting[] = [];
    this.councilMeetingsByYear.forEach((year) => {
      _meetings = _meetings.concat(year.councilMeetings);
    });
    return _meetings;
  }

  public get hasFeaturedMeetings(): boolean {
    return this.featuredCouncilMeetings.length > 0;
  }

  public get featuredCouncilMeetings(): CouncilMeeting[] {
    if (this.ready) {
      return this.allCouncilMeetings
        .filter((meeting) => {
          return meeting.featured;
        });
    } else {
      return null;
    }
  }

  public get ready(): boolean {
    return this.councilMeetingsByYear !== null && this.yearlyCheckComplete;
  }

  constructor(
    private http: HttpClient
  ) {
    this.setup();
  }

  private setup() {
    this.yearlyCheckComplete = false;
    this.councilMeetingsByYear = [];
    const year = 2021;
    this.checkYear(year);
  }

  private checkYear(year: number) {
    let councilMeetingDTOs: CouncilMeetingDTO[];
    this.readMeetings(year)
      .subscribe((data) => councilMeetingDTOs = data,
        () => {
          this.yearlyCheckComplete = true;
        }, () => {
          this.convertYearlyMeetings(councilMeetingDTOs, year);
        });
  }

  private convertYearlyMeetings(councilMeetingDTOs: CouncilMeetingDTO[], year: number) {
    const meetingsComplete = councilMeetingDTOs
      .map(meeting => {
        return this.mapDTOtoMeeting(meeting);
      });
    if (meetingsComplete.length === 0) {
      this.yearlyCheckComplete = true;
    } else {
      const yearly: CouncilMeetingYear = {
        councilMeetings: meetingsComplete,
        year: year,
      };
      this.councilMeetingsByYear.unshift(yearly);
      const nextYear = year + 1;
      this.checkYear(nextYear);
    }
  }

  private mapDTOtoMeeting(meeting: CouncilMeetingDTO) {
    return {
      year: meeting.year,
      month: meeting.month,
      day: meeting.day,
      time: meeting.time,
      type: meeting.type,
      subtitle: meeting.subtitle,
      featured: meeting.featured,
      show: meeting.show,
      readableDate: this.getReadableDate(meeting),
      readableType: this.getReadableType(meeting),
      link: this.getLink(meeting),
    };
  }

  private readMeetings(year: number): Observable<any> {
    return this.http.get(`./assets/agenda/${year}/_index.json`);
  }

  private getLink(councilMeeting: CouncilMeetingDTO): string {
    const fileName = `${councilMeeting.month}-${councilMeeting.day}_${councilMeeting.type}`;
    return `/#/view/agenda~${councilMeeting.year}~${fileName}`;
  }

  private getReadableDate(councilMeeting: CouncilMeetingDTO): string {
    const monthName = this.getMonthName(Number(councilMeeting.month) - 1);
    return `${monthName} ${Number(councilMeeting.day)}, ${councilMeeting.year}`;
  }

  private getReadableType(councilMeeting: CouncilMeetingDTO): string {
    switch (councilMeeting.type) {
      case "WS":
        return "Work Session";
      case "RM":
        return "Regular Meeting";
      case "SM":
        return "Special Meeting";
      case "HB":
        return "Housing Board Meeting";
      default:
        return "?"
    }
  }

  private getMonthName(monthNumber) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[monthNumber];
  }

}
