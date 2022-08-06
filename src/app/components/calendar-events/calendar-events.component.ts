import {Component, Input} from '@angular/core';
import {DsmCityUpdateService} from "../../services/dsm-city-update.service";
import {CalendarEvent} from "../../models/CalendarEvent.model";
import {DateHelper} from "../../utilities/date.util";

@Component({
  selector: 'app-calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.css']
})
export class CalendarEventsComponent {
  @Input() public calendarEvents: CalendarEvent[] = null;
  @Input() public manageable = false;

  public get ready(): boolean {
    return this.calendarEvents !== null;
  }

  public get calendarEventsForDisplay(): CalendarEvent[] {
    if (!this.ready) {
      return [];
    } else if (this.manageable) {
      return this.calendarEvents.filter(x => !x.checked);
    } else {
      return this.calendarEvents;
    }
  }

  constructor(
    private dsmCityUpdateService: DsmCityUpdateService,
  ) {
  }

  public getMonthName(monthNumber: string): string {
    return DateHelper.getMonthName(Number(monthNumber) - 1);
  }

  public checkCalendarEvent(calendarEvent: CalendarEvent) {
    let response;
    this.dsmCityUpdateService.checkCalendarEvent(calendarEvent)
      .subscribe((res) => response = res,
        (error) => {
          console.log("check calendar event failed");
        }, () => {
          calendarEvent.checked = true;
        });
  }


}
