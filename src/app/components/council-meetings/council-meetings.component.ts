import {Component} from '@angular/core';
import {CouncilMeetingService} from 'src/app/services/council-meeting.service';
import {CouncilMeeting} from "../../models/CouncilMeeting.model";

@Component({
  selector: 'app-council-meetings',
  templateUrl: './council-meetings.component.html',
  styleUrls: ['./council-meetings.component.css']
})
export class CouncilMeetingsComponent {
  constructor(
    public councilMeetingService: CouncilMeetingService,
  ) {
  }

  public getLink(councilMeeting: CouncilMeeting): string {
    return `/#/view/agenda~${councilMeeting.fileName}`;
  }

  public getReadableDate(councilMeeting: CouncilMeeting): string {
    return `${councilMeeting.day}/${councilMeeting.month}/${councilMeeting.year}`;
  }

  public getReadableType(councilMeeting: CouncilMeeting): string {
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
