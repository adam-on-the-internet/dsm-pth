import {Component} from "@angular/core";
import {LinkService} from "../../services/link.service";

@Component({
  selector: "app-signup-to-speak",
  templateUrl: "./signup-to-speak.component.html",
  styleUrls: ["./signup-to-speak.component.css"]
})
export class SignupToSpeakComponent {
  public councilMeetingYear = "2022";
  public councilMeetingMonth = "February";
  public councilMeetingDay = "7";

  public toAddress = "CityClerk@dmgov.org";
  public pthEmail = "dsmpeoplestownhall@gmail.com";
  public email = "";
  public name = "";
  public address = "";
  public city = "Des Moines";
  public state = "IA";
  public sendCopy = false;

  public get allSet(): boolean {
    return this.email !== "" && this.name !== "" && this.address !== ""
      && this.city !== "" && this.state !== "";
  }

  public get date(): string {
    return `${this.councilMeetingMonth} ${this.councilMeetingDay}, ${this.councilMeetingYear}`;
  }

  public get body(): string {
    const greeting = `Hello City Clerk,`;
    const request = `I am requesting to speak at the ${this.date} Regular City Council Meeting.`;
    const BLANK = "__________";
    const nameParam = this.name ? this.name : BLANK;
    const addressParam = this.address ? this.address : BLANK;
    const cityParam = this.city ? this.city : BLANK;
    const stateParam = this.state ? this.state : BLANK;
    const emailParam = this.email ? this.email : BLANK;
    const disclaimer = `
If this email is insufficient, or if the rules to speak vary from the Procedural Rules,
please let me know what the requirements are for a member of the public to sign up to speak at a meeting.
    `;
    const ruleHeader = `
Per Procedural Rule 16 (Des Moines Residents, Property Owners and City Taxpayers Requests to Speak):
    `;
    const ruleText = `
"Any City resident, property owner or taxpayer may request to speak on a regular Agenda by filing such
request in writing with the City Clerk on or after the date ten days preceding a regular Council meeting
but prior to 5:00 P.M. on the Tuesday preceding a regular Council meeting."
    `;
    return `
<p>${greeting}</p>

<p>${request}</p>

<p>Name: ${nameParam}</p>
<p>Email: ${emailParam}</p>
<p>Address: ${addressParam}</p>
<p>City: ${cityParam}</p>
<p>State: ${stateParam}</p>

<p>${ruleHeader}</p>
<p>${ruleText}</p>

<p>${disclaimer}</p>

<p>
Thank you,
<br>
${nameParam}
</p>
`;
  }

  public get subject(): string {
    return `Request to Sign Up to Speak on ${this.date}`;
  }

  public get bcc(): string {
    return this.sendCopy ? this.pthEmail : "";
  }

  public get mailto(): string {
    const parsedSubject = encodeURIComponent(this.subject);
    const parsedBody = encodeURIComponent(this.removeHtml(this.body));
    return SignupToSpeakComponent.buildMailto(this.toAddress, parsedSubject, parsedBody, this.bcc);
  }

  constructor(
    public linkService: LinkService,
  ) {
  }

  public setSendCopy(sendCopy: boolean): void {
    this.sendCopy = sendCopy;
  }

  public removeHtml(string: string): string {
    return string.replace(/<p>/g, "").replace(/<\/p>/g, "").replace(/<br>/g, "");
  }

  // TODO make more generic, include URI encoding, etc
  private static buildMailto(TO: string, SUBJECT: string, BODY: string, BCC: string = ""): string {
    if (BCC) {
      BCC = `bcc=${BCC}&`
    }
    return `mailto:${TO}?${BCC}subject=${SUBJECT}&body=${BODY}`;
  }

}
