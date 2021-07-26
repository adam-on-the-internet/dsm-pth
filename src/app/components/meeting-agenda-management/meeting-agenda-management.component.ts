import {Component, OnInit} from '@angular/core';
import {NavHelperService} from "../../services/nav-helper.service";
import {MeetingAgenda} from "../../models/MeetingAgenda.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {MeetingAgendaService} from "../../services/meeting-agenda.service";

@Component({
  selector: 'app-meeting-agenda-management',
  templateUrl: './meeting-agenda-management.component.html',
  styleUrls: ['./meeting-agenda-management.component.scss']
})
export class MeetingAgendaManagementComponent implements OnInit {
  public meetingAgendas: MeetingAgenda[] = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.meetingAgendas);
  }

  constructor(
    private navHelper: NavHelperService,
    private meetingAgendaService: MeetingAgendaService,
  ) {
  }

  public ngOnInit() {
    this.loadMeetingAgendas();
  }

  public goToAddAgenda() {
    this.navHelper.goToAgendaFormAdd();
  }

  private loadMeetingAgendas(): void {
    this.meetingAgendas = null;
    this.meetingAgendaService.getAllMeetingAgendas()
      .subscribe((res) => this.meetingAgendas = res);
  }

}
