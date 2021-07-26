import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {AgendaItem, MeetingAgenda} from "../models/MeetingAgenda.model";

@Injectable({
  providedIn: 'root'
})
export class MeetingAgendaService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getAllMeetingAgendas(): Observable<MeetingAgenda[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "meetingAgenda",
      collection: "meeting",
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<MeetingAgenda[]>;
  }

  public getSingleMeetingAgenda(id: string): Observable<MeetingAgenda> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "meetingAgenda",
      collection: "meeting/" + id,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<MeetingAgenda>;
  }

  public createMeetingAgenda(meetingAgenda: MeetingAgenda): Observable<MeetingAgenda> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "meetingAgenda",
      collection: "meeting",
    });
    return this.http.post(url, meetingAgenda, CookieHelper.authHeaders) as Observable<MeetingAgenda>;
  }

  public updateMeetingAgenda(meetingAgenda: MeetingAgenda): Observable<MeetingAgenda> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "meetingAgenda",
      collection: "meeting",
    });
    return this.http.put(url, meetingAgenda, CookieHelper.authHeaders) as Observable<MeetingAgenda>;
  }

  public deleteMeetingAgenda(id: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "meetingAgenda",
      collection: "meeting/" + id,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }

  public getSingleAgendaItem(id: string): Observable<AgendaItem> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "meetingAgenda",
      collection: "item/" + id,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<AgendaItem>;
  }

  public createAgendaItem(agendaItem: AgendaItem): Observable<AgendaItem> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "meetingAgenda",
      collection: "item",
    });
    return this.http.post(url, agendaItem, CookieHelper.authHeaders) as Observable<AgendaItem>;
  }

  public updateAgendaItem(agendaItem: AgendaItem): Observable<AgendaItem> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "meetingAgenda",
      collection: "item",
    });
    return this.http.put(url, agendaItem, CookieHelper.authHeaders) as Observable<AgendaItem>;
  }

  public delete(id: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "meetingAgenda",
      collection: "item/" + id,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}
