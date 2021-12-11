import {Component} from '@angular/core';
import {CouncilMeetingService} from 'src/app/services/council-meeting.service';

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
}
