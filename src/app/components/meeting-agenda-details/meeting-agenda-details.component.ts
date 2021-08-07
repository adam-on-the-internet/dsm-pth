import {Component, OnInit} from "@angular/core";
import {AgendaItem, MeetingAgendaComplete} from "../../models/MeetingAgenda.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {NavHelperService} from "../../services/nav-helper.service";
import {MeetingAgendaService} from "../../services/meeting-agenda.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-meeting-agenda-details",
  templateUrl: "./meeting-agenda-details.component.html",
  styleUrls: ["./meeting-agenda-details.component.scss"]
})
export class MeetingAgendaDetailsComponent implements OnInit {
  public meetingAgenda: MeetingAgendaComplete = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.meetingAgenda);
  }

  public get sortedAgendaItems(): AgendaItem[] {
    const itemsCopy = this.meetingAgenda.agendaItems;
    return itemsCopy.sort((a, b) => (a.ourPriority < b.ourPriority) ? 1 : -1);
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

  public goToAllAgendas(): void {
    this.navHelper.goToAgendaManagement();
  }

  public goToEditAgenda(): void {
    this.navHelper.goToAgendaFormEdit(this.meetingAgenda._id);
  }

  public goToAddAgendaItem(): void {
    this.navHelper.goToAgendaItemFormAdd(this.meetingAgenda._id);
  }

  public goToDetails(agendaItem: AgendaItem): void {
    this.navHelper.goToAgendaItemDetails(agendaItem._id);
  }

  public goToEdit(agendaItem: AgendaItem): void {
    this.navHelper.goToAgendaItemFormEdit(agendaItem._id);
  }

  public requestDelete(agendaItem: AgendaItem): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${agendaItem.name}?`);
    if (confirmDelete) {
      this.delete(agendaItem);
    }
  }

  private load() {
    const id = this.route.snapshot.paramMap.get("id");
    this.meetingAgendaService.getSingleMeetingAgenda(id)
      .subscribe((res) => this.meetingAgenda = res);
  }

  private delete(agendaItem: AgendaItem) {
    let response;
    this.meetingAgendaService.deleteAgendaItem(agendaItem._id)
      .subscribe((res) => response = res,
        () => {
        },
        () => {
          this.load();
        });
  }

}
