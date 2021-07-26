import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {MeetingAgenda} from "../models/MeetingAgenda.model";

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

  public delete(id: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.MainService,
      controller: "meetingAgenda",
      collection: "meeting/" + id,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}
