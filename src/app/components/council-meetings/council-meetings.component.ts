import {Component} from '@angular/core';
import {CouncilMeetingService} from 'src/app/services/council-meeting.service';

@Component({
  selector: 'app-council-meetings',
  templateUrl: './council-meetings.component.html',
  styleUrls: ['./council-meetings.component.css']
})
export class CouncilMeetingsComponent {
  public meetingYears: any[] = this.councilMeetingService.meetingYears;

  constructor(
    public councilMeetingService: CouncilMeetingService,
  ) {
  }

  public getLink(date, type): string {
    return `#/view/agenda~${date}~${type}~overview`;
  }

  public getReadableDate(date): string {
    const datePieces = date.split("_");
    return `${datePieces[1]}/${datePieces[2]}/${datePieces[0]}`;
  }

  public getReadableType(type): string {
    switch (type) {
      case "WS":
        return "Work Session";
      case "RM":
        return "Regular Meeting";
      default:
        return "?"
    }
  }

}
