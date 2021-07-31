import {Component, OnInit} from '@angular/core';
import {AgendaItem, MeetingAgenda} from "../../models/MeetingAgenda.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {NavHelperService} from "../../services/nav-helper.service";
import {MeetingAgendaService} from "../../services/meeting-agenda.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-agenda-item-details',
  templateUrl: './agenda-item-details.component.html',
  styleUrls: ['./agenda-item-details.component.scss']
})
export class AgendaItemDetailsComponent implements OnInit {
  public agendaItem: AgendaItem = null;
  public meetingAgenda: MeetingAgenda = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.agendaItem) && BooleanHelper.hasValue(this.meetingAgenda);
  }

  constructor(
    private navHelper: NavHelperService,
    private meetingAgendaService: MeetingAgendaService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.loadAgendaItem();
  }

  public goToMeetingAgenda() {
    this.navHelper.goToAgendaDetails(this.agendaItem.meetingAgendaId);
  }

  public goToEditItem() {
    this.navHelper.goToAgendaItemFormEdit(this.agendaItem._id);
  }

  public goToAddAgendaItem() {
    this.navHelper.goToAgendaItemFormAdd(this.agendaItem.meetingAgendaId);
  }

  private loadAgendaItem() {
    const itemId = this.route.snapshot.paramMap.get("itemId");
    this.meetingAgendaService.getSingleAgendaItem(itemId)
      .subscribe((res) => this.agendaItem = res, () => {
      }, () => {
        this.loadMeetingAgenda();
      });
  }

  private loadMeetingAgenda() {
    this.meetingAgendaService.getSingleMeetingAgenda(this.agendaItem.meetingAgendaId)
      .subscribe((res) => this.meetingAgenda = res);
  }

}
