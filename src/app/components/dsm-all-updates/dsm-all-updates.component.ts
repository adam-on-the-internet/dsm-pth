import {Component, Input, OnInit} from '@angular/core';
import {NewsPost} from "../../models/NewsPost.model";
import {CalendarEvent} from "../../models/CalendarEvent.model";
import {DsmCityUpdateService} from "../../services/dsm-city-update.service";

@Component({
  selector: 'app-dsm-all-updates',
  templateUrl: './dsm-all-updates.component.html',
  styleUrls: ['./dsm-all-updates.component.css']
})
export class DsmAllUpdatesComponent implements OnInit {
  @Input() public managementMode: boolean = false;

  public newsPosts: NewsPost[] = null;
  public calendarEvents: CalendarEvent[] = null;

  public get uncheckedReady(): boolean {
    return this.newsPosts !== null && this.calendarEvents !== null;
  }

  public get hasUncheckedItems(): boolean {
    return this.hasUncheckedNewsPosts || this.hasUncheckedCalendarEvents;
  }

  public get hasUncheckedNewsPosts(): boolean {
    return this.newsPosts && this.newsPosts.filter(x => !x.checked).length > 0;
  }

  public get hasUncheckedCalendarEvents(): boolean {
    return this.calendarEvents && this.calendarEvents.filter(x => !x.checked).length > 0;
  }


  constructor(
    private dsmCityUpdateService: DsmCityUpdateService,
  ) {
  }

  public ngOnInit(): void {
    this.getAllNewsPosts();
    this.getAllCalendarEvents();
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
