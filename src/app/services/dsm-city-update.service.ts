import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {HttpClient} from "@angular/common/http";
import {NewsPost} from "../models/NewsPost.model";
import {CalendarEvent} from "../models/CalendarEvent.model";

@Injectable({
  providedIn: 'root'
})
export class DsmCityUpdateService {

  constructor(
    private http: HttpClient,
  ) {
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
