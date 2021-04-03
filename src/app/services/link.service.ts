import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LinkService {
  // dsm city links
  public signUpToSpeak = "https://www.dsm.city/interactive_forms/request_to_speak_before_the_city_council.php";
  public cityCalendar = "https://www.dsm.city/calendar.php";
  public councilMeetings = "https://www.dsm.city/government/council_meetings_and_agendas/index.php";

  // our social links
  public facebookLink = "https://www.facebook.com/Des-Moines-Peoples-Town-Hall-104767104729564/";
  public instagramLink = "https://www.instagram.com/desmoinespeoplestownhall";
  public twitterLink = "https://twitter.com/peoplestownhall";
  public email = "dsmpeoplestownhall@gmail.com";
  public emailLink = "mailto:" + this.email;
  public linkTreeLink = "https://linktr.ee/dsmpeoplestownhall";

  // specific links
  public petitionLink = "https://t.co/GXc99YcO4d?amp=1";
}
