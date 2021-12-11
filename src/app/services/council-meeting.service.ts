import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CouncilMeeting, CouncilMeetingDTO} from "../models/CouncilMeeting.model";

@Injectable({
  providedIn: 'root'
})
export class CouncilMeetingService {
  public councilMeetings: CouncilMeeting[] = null;

  public get featuredCouncilMeetings(): CouncilMeeting[] {
    if (this.ready) {
      return this.councilMeetings.filter((meeting) => {
        return meeting.featured;
      });
    } else {
      return null;
    }
  }

  public get ready(): boolean {
    return this.councilMeetings !== null;
  }

  constructor(
    private http: HttpClient
  ) {
    this.readMeetings().subscribe(data => {
      const councilMeetingDTOs: CouncilMeetingDTO[] = data;
      this.councilMeetings = councilMeetingDTOs.map(meeting => {
        return this.mapDTOtoMeeting(meeting);
      });
    });
  }

  private mapDTOtoMeeting(meeting: CouncilMeetingDTO) {
    return {
      fileName: meeting.fileName,
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

  private readMeetings(): Observable<any> {
    return this.http.get("./assets/agenda/_agenda.json");
  }

  private getLink(councilMeeting: CouncilMeetingDTO): string {
    return `/#/view/agenda~${councilMeeting.fileName}`;
  }

  private getReadableDate(councilMeeting: CouncilMeetingDTO): string {
    return `${councilMeeting.day}/${councilMeeting.month}/${councilMeeting.year}`;
  }

  private getReadableType(councilMeeting: CouncilMeetingDTO): string {
    switch (councilMeeting.type) {
      case "WS":
        return "Work Session";
      case "RM":
        return "Regular Meeting";
      default:
        return "?"
    }
  }
}
