import {Component} from "@angular/core";
import {LinkService} from "../../services/link.service";

@Component({
  selector: "app-signup-to-speak",
  templateUrl: "./signup-to-speak.component.html",
  styleUrls: ["./signup-to-speak.component.css"]
})
export class SignupToSpeakComponent {
  public councilMeetingYear = "2022";
  public councilMeetingMonth = "January";
  public councilMeetingDay = "24";

  public toAddress = "CityClerk@dmgov.org";
  public pthEmail = "dsmpeoplestownhall@gmail.com";
  public email = "";
  public name = "";
  public address = "";
  public sendCopy = false;

  public get allSet(): boolean {
    return this.email !== "" && this.name !== "" && this.address !== "";
  }

  public get date(): string {
    return `${this.councilMeetingMonth} ${this.councilMeetingDay}, ${this.councilMeetingYear}`;
  }

  public get body(): string {
    const greeting = `Hello City Clerk,`;
    const request = `I am requesting to speak at the ${this.date} Regular City Council Meeting.`;
    const nameParam = this.name ? this.name : "_______";
    const addressParam = this.address ? this.address : "_______";
    const emailParam = this.email ? this.email : "_______";
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
      <p>Address: ${addressParam}</p>
      <p>Email: ${emailParam}</p>

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

  public get bccParam(): string {
    return this.sendCopy ? `bcc=${this.pthEmail}&` : "";
  }

  public get parsedBody(): string {
    const parsedEmail = this.parseForLink(this.email);
    const parsedName = this.parseForLink(this.name);
    const parsedAddress = this.parseForLink(this.address);
    const parsedDate = this.parseForLink(this.date);
    return `Hello City Clerk%2C%0D%0A%0D%0AI%20am requesting to speak at the ${parsedDate} Regular City Council Meeting.%0D%0A%0D%0APer Procedural Rule 16 (Citizen Agenda Requests)%3A %22Any citizen may request to have an item placed on the Agenda (including a request to speak) by filing such request in writing with the City Clerk on or after the date ten days preceding a regular Council meeting but prior to 5%3A00 P.M. on the Tuesday preceding a regular Council meeting.%22%0D%0A%0D%0AIf this email is insufficient%2C or if the rules to speak vary from the Procedural Rules%2C please let me know what the requirements are for a member of the public to sign up to speak at a%20meeting.%0D%0A%0D%0AName%3A%20${parsedName}%0D%0AAddress%3A ${parsedAddress}%0D%0AEmail%3A%20${parsedEmail}%0D%0A%0D%0AThank you%2C%0D%0A${parsedName}`;
  }

  public get mailto(): string {
    const parsedSubject = this.parseForLink(this.subject);
    // const parsedBody = this.parseForLink(this.parsedBody);
    // TODO actual body
    const parsedBody = "body"
    return `mailto:${this.toAddress}?${this.bccParam}subject=${parsedSubject}&body=${parsedBody}`;
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
