import {Component} from '@angular/core';

@Component({
  selector: 'app-council-meeting-guide',
  templateUrl: './council-meeting-guide.component.html',
  styleUrls: ['./council-meeting-guide.component.css']
})
export class CouncilMeetingGuideComponent {
  public fullPath = "assets/pages/council-meeting-guide.md";

  constructor() {
  }

}
