import {Component, OnInit} from '@angular/core';
import {MeetingAgenda} from "../../models/MeetingAgenda.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {NavHelperService} from "../../services/nav-helper.service";
import {MeetingAgendaService} from "../../services/meeting-agenda.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-meeting-agenda-details',
  templateUrl: './meeting-agenda-details.component.html',
  styleUrls: ['./meeting-agenda-details.component.scss']
})
export class MeetingAgendaDetailsComponent implements OnInit {
  public meetingAgenda: MeetingAgenda = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.meetingAgenda);
  }

  constructor(
    private navHelper: NavHelperService,
    private meetingAgendaService: MeetingAgendaService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.load();
  }

  private load() {
    const id = this.route.snapshot.paramMap.get("id");
    this.meetingAgendaService.getSingleMeetingAgenda(id)
      .subscribe((res) => this.meetingAgenda = res);
  }

}
