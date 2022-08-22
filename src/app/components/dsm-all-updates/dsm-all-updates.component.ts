import {Component, Input, OnInit} from '@angular/core';
import {NewsPost} from "../../models/NewsPost.model";
import {CalendarEvent} from "../../models/CalendarEvent.model";
import {DsmCityUpdateService} from "../../services/dsm-city-update.service";
import {CouncilMeetingSummary} from "../../models/CouncilMeetingSummary.model";
import {AgendaVersion} from "../../models/AgendaVersion.model";

@Component({
  selector: 'app-dsm-all-updates',
  templateUrl: './dsm-all-updates.component.html',
  styleUrls: ['./dsm-all-updates.component.css']
})
export class DsmAllUpdatesComponent implements OnInit {
  @Input() public managementMode: boolean = false;

  public newsPosts: NewsPost[] = null;
  public calendarEvents: CalendarEvent[] = null;
  public councilMeetings: CouncilMeetingSummary[] = null;
  public agendaVersions: AgendaVersion[] = null;

  public get uncheckedReady(): boolean {
    return this.newsPosts !== null && this.calendarEvents !== null
      && this.councilMeetings !== null && this.agendaVersions !== null;
  }

  public get hasUncheckedItems(): boolean {
    return this.hasUncheckedNewsPosts || this.hasUncheckedCalendarEvents || this.hasUncheckedCouncilMeetings
      || this.hasUncheckedAgendaVersions;
  }

  public get hasUncheckedNewsPosts(): boolean {
    return this.newsPosts && this.newsPosts.filter(x => !x.checked).length > 0;
  }

  public get hasUncheckedCalendarEvents(): boolean {
    return this.calendarEvents && this.calendarEvents.filter(x => !x.checked).length > 0;
  }

  public get hasUncheckedCouncilMeetings(): boolean {
    return this.councilMeetings && this.councilMeetings.filter(x => !x.checked).length > 0;
  }

  public get hasUncheckedAgendaVersions(): boolean {
    return this.agendaVersions && this.agendaVersions.filter(x => !x.checked).length > 0;
  }

  constructor(
    private dsmCityUpdateService: DsmCityUpdateService,
  ) {
  }

  public ngOnInit(): void {
    this.getAllNewsPosts();
    this.getAllCalendarEvents();
    this.getAllCouncilMeetings();
    this.getAllAgendaVersions();
  }

  private getAllAgendaVersions() {
    this.agendaVersions = null;
    if (!this.managementMode) {
      return; // Only management mode should use Agenda Versions.
    }
    this.dsmCityUpdateService.getAllAgendaVersions()
      .subscribe((res) => this.agendaVersions = res,
        (error) => {
          console.log("get all agenda versions failed");
        });
  }

  private getAllCouncilMeetings() {
    this.councilMeetings = null;
    this.dsmCityUpdateService.getAllCouncilMeetings()
      .subscribe((res) => this.councilMeetings = res,
        (error) => {
          console.log("get all council meetings failed");
        });
  }

  private getAllNewsPosts() {
    this.newsPosts = null;
    this.dsmCityUpdateService.getAllNewsPosts()
      .subscribe((res) => this.newsPosts = res,
        (error) => {
          console.log("get all news posts failed");
        });
  }

  private getAllCalendarEvents() {
    this.calendarEvents = null;
    this.dsmCityUpdateService.getAllCalendarEvents()
      .subscribe((res) => this.calendarEvents = res,
        (error) => {
          console.log("get all calendar events failed");
        });
  }
}
