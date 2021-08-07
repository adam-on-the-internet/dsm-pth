import {Component, OnInit} from "@angular/core";
import {MeetingAgendaService} from "../../services/meeting-agenda.service";
import {ActivatedRoute} from "@angular/router";
import {AgendaItem, MeetingAgendaComplete} from "../../models/MeetingAgenda.model";

@Component({
  selector: "app-published-agenda",
  templateUrl: "./published-agenda.component.html",
  styleUrls: ["./published-agenda.component.scss"]
})
export class PublishedAgendaComponent implements OnInit {
  public meetingAgenda: MeetingAgendaComplete = null;
  public mode = "priority-only";

  public filterOptions: string[] = [
    "priority-only",
    "priority-order",
    "agenda-order",
    "none",
  ];

  public get sortedAgendaItems(): AgendaItem[] {
    let itemsCopy = this.meetingAgenda.agendaItems;
    if (this.mode === "priority-only") {
      itemsCopy = itemsCopy.filter((item) => {
        return item.ourPriority >= 4;
      });
      return PublishedAgendaComponent.sortByPriority(itemsCopy);
    } else if (this.mode === "priority-order") {
      return PublishedAgendaComponent.sortByPriority(itemsCopy);
    } else if (this.mode === "agenda-order") {
      return PublishedAgendaComponent.sortByAgendaOrder(itemsCopy);
    } else {
      return itemsCopy;
    }
  }

  public get ready(): boolean {
    return this.meetingAgenda !== null;
  }

  constructor(
    private meetingAgendaService: MeetingAgendaService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.meetingAgendaService.getSingleMeetingAgenda(id)
      .subscribe((res) => this.meetingAgenda = res);
  }

  public isItemOnConsent(item: AgendaItem): boolean {
    const meetingHasConsent = this.meetingAgenda.consentStart && this.meetingAgenda.consentEnd;
    if (!meetingHasConsent) {
      return false;
    }
    const agendaNumber = PublishedAgendaComponent.getNumberFromAgendaItem(item);
    return agendaNumber >= this.meetingAgenda.consentStart && agendaNumber <= this.meetingAgenda.consentEnd;
  }

  private static sortByPriority(itemsCopy: AgendaItem[]) {
    return itemsCopy.sort((a, b) => (a.ourPriority < b.ourPriority) ? 1 : -1);
  }

  private static sortByAgendaOrder(itemsCopy: AgendaItem[]) {
    return itemsCopy.sort((a, b) => (this.getNumberFromAgendaItem(a) > this.getNumberFromAgendaItem(b)) ? 1 : -1);
  }

  private static getNumberFromAgendaItem(a: AgendaItem): number {
    const split = a.name.split(" ");
    if (split.length < 1) {
      return 999;
    }
    const numberPiece = split[0];
    const extracted = numberPiece.replace("#", "").replace(":", "");
    return Number(extracted);
  }
}
