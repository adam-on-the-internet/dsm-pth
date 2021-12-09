import {Component} from '@angular/core';
import {CouncilMeetingService} from 'src/app/services/council-meeting.service';
import {LinkService} from "../../services/link.service";

@Component({
  selector: 'app-council-toolkit',
  templateUrl: './council-toolkit.component.html',
  styleUrls: ['./council-toolkit.component.css']
})
export class CouncilToolkitComponent {

  constructor(
    public linkService: LinkService,
    public councilMeetingService: CouncilMeetingService,
  ) {
  }

}
