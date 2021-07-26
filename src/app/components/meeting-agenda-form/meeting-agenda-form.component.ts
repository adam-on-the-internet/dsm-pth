import {Component, OnInit} from '@angular/core';
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: 'app-meeting-agenda-form',
  templateUrl: './meeting-agenda-form.component.html',
  styleUrls: ['./meeting-agenda-form.component.scss']
})
export class MeetingAgendaFormComponent implements OnInit {

  constructor(
    private navHelper: NavHelperService,
  ) {
  }

  public ngOnInit() {
  }

  public submit(): void {
    this.navHelper.goToAgendaManagement();
  }

}
