import {Component} from "@angular/core";
import {LinkService} from "../../services/link.service";
import {CookieHelper} from "../../utilities/cookie.util";

@Component({
  selector: "app-signup-to-speak",
  templateUrl: "./signup-to-speak.component.html",
  styleUrls: ["./signup-to-speak.component.css"]
})
export class SignupToSpeakComponent {
  public toAddress = "CityClerk@dmgov.org";
  public bccPTH = "bcc=dsmpeoplestownhall@gmail.com&";

  public email = "";
  public name = "";
  public address = "";
  public councilMeetingYear = "2022";
  public councilMeetingMonth = "January";
  public councilMeetingDay = "24";
  public sendCopy = false;

  public get loggedIn(): boolean {
    return CookieHelper.isLoggedOn;
  }

  public get allSet(): boolean {
    return this.email !== "" && this.name !== "" && this.address !== "";
  }

  public get date(): string {
    return `${this.councilMeetingMonth} ${this.councilMeetingDay}, ${this.councilMeetingYear}`;
  }

  public get body(): string {
    const parsedEmail = this.parseForLink(this.email);
    const parsedName = this.parseForLink(this.name);
    const parsedAddress = this.parseForLink(this.address);
    const parsedDate = this.parseForLink(this.date);
    return `Hello City Clerk%2C%0D%0A%0D%0AI%20am requesting to speak at the ${parsedDate} Regular City Council Meeting.%0D%0A%0D%0APer Procedural Rule 16 (Citizen Agenda Requests)%3A %22Any citizen may request to have an item placed on the Agenda (including a request to speak) by filing such request in writing with the City Clerk on or after the date ten days preceding a regular Council meeting but prior to 5%3A00 P.M. on the Tuesday preceding a regular Council meeting.%22%0D%0A%0D%0AIf this email is insufficient%2C or if the rules to speak vary from the Procedural Rules%2C please let me know what the requirements are for a member of the public to sign up to speak at a%20meeting.%0D%0A%0D%0AName%3A%20${parsedName}%0D%0AAddress%3A ${parsedAddress}%0D%0AEmail%3A%20${parsedEmail}%0D%0A%0D%0AThank you%2C%0D%0A${parsedName}`;
  }

  public get subject(): string {
    return `Request to Sign Up to Speak on ${this.parseForLink(this.date)}`;
  }

  public get mailto(): string {
    const bcc = this.sendCopy ? this.bccPTH : "";
    const parsedSubject = this.parseForLink(this.subject);
    const parsedBody = this.parseForLink(this.body);
    return `mailto:${this.toAddress}?${bcc}subject=${parsedSubject}&body=${parsedBody}`;
  }

  constructor(
    public linkService: LinkService,
  ) {
  }

  public setSendCopy(sendCopy: boolean): void {
    this.sendCopy = sendCopy;
  }

  public parseForLink(string: string): string {
    return string.replace(/ /g, "%20").replace(/@/g, "%40");
  }

}
