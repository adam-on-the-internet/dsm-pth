import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CouncilMeeting, CouncilMeetingDTO} from "../models/CouncilMeeting.model";

@Injectable({
  providedIn: 'root'
})
export class CouncilMeetingService {
  public councilMeetings2021: CouncilMeeting[] = null;

  public get featuredCouncilMeetings(): CouncilMeeting[] {
    if (this.ready) {
      return this.councilMeetings2021.filter((meeting) => {
        return meeting.featured;
      });
    } else {
      return null;
    }
  }

  public get ready(): boolean {
    return this.councilMeetings2021 !== null;
  }

  constructor(
    private http: HttpClient
  ) {
    this.readMeetings(2021).subscribe(data => {
      const councilMeetingDTOs: CouncilMeetingDTO[] = data;
      this.councilMeetings2021 = councilMeetingDTOs.map(meeting => {
        return this.mapDTOtoMeeting(meeting);
      });
    });
  }

  private mapDTOtoMeeting(meeting: CouncilMeetingDTO) {
    return {
      year: meeting.year,
      month: meeting.month,
      day: meeting.day,
      time: meeting.time,
      type: meeting.type,
      featured: meeting.featured,
      readableDate: this.getReadableDate(meeting),
      readableType: this.getReadableType(meeting),
      link: this.getLink(meeting),
    };
  }

  private readMeetings(year: number): Observable<any> {
    return this.http.get(`./assets/agenda/${year}_index.json`);
  }

  private getLink(councilMeeting: CouncilMeetingDTO): string {
    const fileName = `${councilMeeting.year}-${councilMeeting.month}-${councilMeeting.day}_${councilMeeting.type}`;
    return `/#/view/agenda~${fileName}`;
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
