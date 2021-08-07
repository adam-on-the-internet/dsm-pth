import {Component, OnInit} from "@angular/core";
import {MeetingAgendaService} from "../../services/meeting-agenda.service";
import {MeetingAgenda} from "../../models/MeetingAgenda.model";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: "app-published-agenda-list",
  templateUrl: "./published-agenda-list.component.html",
  styleUrls: ["./published-agenda-list.component.scss"]
})
export class PublishedAgendaListComponent implements OnInit {
  public meetingAgendas: MeetingAgenda[] = null;

  constructor(
    private meetingAgendaService: MeetingAgendaService,
    private navHelperService: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.loadMeetingAgendas();
  }

  public goToAgenda(agenda: MeetingAgenda) {
    this.navHelperService.goToAgendaInfo(agenda._id);
  }

  private loadMeetingAgendas(): void {
    this.meetingAgendas = null;
    this.meetingAgendaService.getAllMeetingAgendas()
      .subscribe((res) => this.meetingAgendas = res);
  }

}
