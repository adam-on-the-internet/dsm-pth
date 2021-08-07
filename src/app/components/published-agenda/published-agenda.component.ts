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
  public meetingAgenda: MeetingAgendaComplete = null;
  public mode = "priority-only";

  public filterOptions: string[] = [
    "priority-only",
    "priority-order",
    "agenda-order",
    "none",
  ];

  private static sortByPriority(itemsCopy: AgendaItem[]) {
    return itemsCopy.sort((a, b) => (a.ourPriority < b.ourPriority) ? 1 : -1);
  }

  private static sortByAgendaOrder(itemsCopy: AgendaItem[]) {
    return itemsCopy.sort((a, b) => (this.scrub(a) > this.scrub(b)) ? 1 : -1);
  }

  private static scrub(a: AgendaItem) {
    return Number(a.name.split(" ")[0].replace("#", "").replace(":", ""));
  }

  public ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.meetingAgendaService.getSingleMeetingAgenda(id)
      .subscribe((res) => this.meetingAgenda = res);
  }
}
