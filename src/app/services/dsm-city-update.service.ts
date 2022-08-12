import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {HttpClient} from "@angular/common/http";
import {NewsPost} from "../models/NewsPost.model";
import {CalendarEvent} from "../models/CalendarEvent.model";
import {CouncilMeetingSummary} from "../models/CouncilMeetingSummary.model";
import {AgendaVersion} from "../models/AgendaVersion.model";

@Injectable({
  providedIn: 'root'
})
export class DsmCityUpdateService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getAllAgendaVersions(): Observable<AgendaVersion[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "dsmScrape/agendaVersion"
    });
    return this.http.get(url, CookieHelper.unauthHeaders) as Observable<AgendaVersion[]>;
  }

  public checkAgendaVersion(agendaVersion: AgendaVersion): Observable<AgendaVersion> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: `dsmScrape/agendaVersion/${agendaVersion._id}/check`
    });
    return this.http.post(url, null, CookieHelper.unauthHeaders) as Observable<AgendaVersion>;
  }

  public getAllNewsPosts(): Observable<NewsPost[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "dsmScrape/newsPost"
    });
    return this.http.get(url, CookieHelper.unauthHeaders) as Observable<NewsPost[]>;
  }

  public checkNewsPost(newsPost: NewsPost): Observable<NewsPost> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: `dsmScrape/newsPost/${newsPost._id}/check`
    });
    return this.http.post(url, null, CookieHelper.unauthHeaders) as Observable<NewsPost>;
  }

  public getAllCouncilMeetings(): Observable<CouncilMeetingSummary[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "dsmScrape/councilMeeting"
    });
    return this.http.get(url, CookieHelper.unauthHeaders) as Observable<CouncilMeetingSummary[]>;
  }

  public checkCouncilMeeting(councilMeetingSummary: CouncilMeetingSummary): Observable<CouncilMeetingSummary> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: `dsmScrape/councilMeeting/${councilMeetingSummary._id}/check`
    });
    return this.http.post(url, null, CookieHelper.unauthHeaders) as Observable<CouncilMeetingSummary>;
  }

  public getAllCalendarEvents(): Observable<CalendarEvent[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "dsmScrape/calendarEvent"
    });
    return this.http.get(url, CookieHelper.unauthHeaders) as Observable<CalendarEvent[]>;
  }

  public checkCalendarEvent(calendarEvent: CalendarEvent): Observable<CalendarEvent> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: `dsmScrape/calendarEvent/${calendarEvent._id}/check`
    });
    return this.http.post(url, null, CookieHelper.unauthHeaders) as Observable<CalendarEvent>;
  }
}
