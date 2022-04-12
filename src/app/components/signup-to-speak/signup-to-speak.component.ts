import {Component} from "@angular/core";
import {LinkService} from "../../services/link.service";
import {MailUtil} from "../../utilities/mail.util";

@Component({
  selector: "app-signup-to-speak",
  templateUrl: "./signup-to-speak.component.html",
  styleUrls: ["./signup-to-speak.component.css"]
})
export class SignupToSpeakComponent {
  // https://www.dsm.city/government/council_meetings_and_agendas/meeting_schedule.php
  public signupOpen = false; // TODO open and close logic based on dates

  // meeting day
  public councilMeetingMonth = "May";
  public councilMeetingDay = "9";

  // cutoff day
  public cutoffMonth = "May";
  public cutoffDay = "3";

  public councilMeetingYear = "2022";
  public cutoffYear = "2022";
  public cutoffTime = "5:00pm";

  public toAddress = "CityClerk@dmgov.org";
  public pthEmail = "dsmpeoplestownhall@gmail.com";
  public topic = "Problems with Des Moines City Council";
  public email = "";
  public name = "";
  public address = "";
  public city = "Des Moines";
  public state = "IA";
  public sendCopy = false;

  public get canSubmit(): boolean {
    return this.allSet && this.signupOpen;
  }

  public get allSet(): boolean {
    return this.email !== "" && this.name !== "" && this.address !== ""
      && this.city !== "" && this.state !== "" && this.topic !== "";
  }

  public get date(): string {
    return `${this.councilMeetingMonth} ${this.councilMeetingDay}, ${this.councilMeetingYear}`;
  }

  public get cutoffDate(): string {
    return `${this.cutoffMonth} ${this.cutoffDay}, ${this.cutoffYear} at ${this.cutoffTime}`;
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
    const topicParam = this.topic ? this.topic : BLANK;
    const disclaimer = `
If this email is insufficient,
please let me know what the requirements are for a member of the public to sign up to speak at a meeting.
    `;
    return `
<p>${greeting}</p>

<p>${request}</p>

<p>Name: ${nameParam}</p>
<p>Email: ${emailParam}</p>
<p>Address: ${addressParam}</p>
<p>City: ${cityParam}</p>
<p>State: ${stateParam}</p>
<p>Topic: ${topicParam}</p>

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
    return MailUtil.buildMailto(this.toAddress, this.subject, this.body, "", this.bcc);
  }

  constructor(
    public linkService: LinkService,
  ) {
  }

  public setSendCopy(sendCopy: boolean): void {
    this.sendCopy = sendCopy;
  }

}
