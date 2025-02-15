import {Component} from "@angular/core";
import {LinkService} from "../../services/link.service";
import {MailUtil} from "../../utilities/mail.util";
import {DateHelper} from "../../utilities/date.util";

// https://www.dsm.city/government/council_meetings_and_agendas/meeting_schedule.php
const MEETING_DATES: string[] = [
  // 2022
  "5/23/2022",
  "6/13/2022",
  "6/27/2022",
  "7/18/2022",
  "8/8/2022",
  "8/22/2022",
  "9/12/2022",
  "10/3/2022",
  "10/24/2022",
  "11/7/2022",
  "11/21/2022",
  "12/12/2022",
  // 2023
  "1/9/2023",
  "1/23/2023",
  "2/6/2023",
  "2/20/2023",
  "3/6/2023",
  "3/27/2023",
  "4/10/2023",
  "4/24/2023",
  "5/8/2023",
  "5/22/2023",
  "6/12/2023",
  "6/26/2023",
  "7/17/2023",
  "8/7/2023",
  "8/21/2023",
  "9/11/2023",
  "10/2/2023",
  "10/23/2023",
  "11/6/2023",
  "11/20/2023",
  "12/4/2023",
  "12/18/2023",
  // 2024
  "1/8/2024",
  "1/22/2024",
  "2/5/2024",
  "2/19/2024",
  "3/4/2024",
  "3/18/2024",
  "4/1/2024",
  "4/15/2024",
  "5/6/2024",
  "5/20/2024",
  "6/3/2024",
  "6/17/2024",
  "7/15/2024",
  "8/5/2024",
  "8/19/2024",
  "9/16/2024",
  "10/7/2024",
  "10/21/2024",
  "11/4/2024",
  "11/18/2024",
  "12/9/2024",
  "12/23/2024",
  // 2025
  "1/13/2025",
  "1/27/2025",
  "2/10/2025",
  "2/24/2025",
  "3/10/2025",
  "3/24/2025",
  "4/7/2025",
  "4/21/2025",
  "5/5/2025",
  "5/19/2025",
  "6/9/2025",
  "6/30/2025",
  "7/14/2025",
  "8/4/2025",
  "8/18/2025",
  "9/8/2025",
  "9/29/2025",
  "10/20/2025",
  "11/3/2025",
  "11/17/2025",
  "12/8/2025",
  "12/22/2025",
  // 2026
  "1/12/2026",
  "1/26/2026",
];

@Component({
  selector: "app-signup-to-speak",
  templateUrl: "./signup-to-speak.component.html",
  styleUrls: ["./signup-to-speak.component.css"]
})
export class SignupToSpeakComponent {
  public toAddress = "CityClerk@dmgov.org";
  public pthEmail = "dsmpeoplestownhall@gmail.com";
  public topic = "Problems with Des Moines City Council";
  public email = "";
  public name = "";
  public address = "";
  public city = "Des Moines";
  public state = "IA";
  public sendCopy = false;

  public get currentTime(): string {
    // ex: 5/30/2022, 3:48:58 PM
    const currentTime = new Date();
    return DateHelper.convertToIowaTime(currentTime);
  }

  public get nextMeetingSubmissionStart(): string {
    const DAYS_BEFORE_MEETING_SUBMISSION_OPENS = 10; // typically, two Fridays before the meeting
    return DateHelper.subtractDays(this.nextMeeting, DAYS_BEFORE_MEETING_SUBMISSION_OPENS);
  }

  public get nextMeetingSubmissionEnd(): string {
    const DAYS_BEFORE_MEETING_SUBMISSION_CLOSES = 1; // typically, the Tuesday before the meeting
    return DateHelper.subtractDays(this.nextMeeting, DAYS_BEFORE_MEETING_SUBMISSION_CLOSES);
  }

  public get futureMeetingDates(): string[] { // in format like 6/13/22
    const _futureMeetingDates: string[] = [];
    MEETING_DATES.forEach((meetingDate) => {
      const meetingDateParsed = Date.parse(meetingDate);
      const meetingInPast = meetingDateParsed < this.currentDateParsed;
      if (!meetingInPast) { // include if meeting date is not in the past
        _futureMeetingDates.push(meetingDate);
      }
    });
    return _futureMeetingDates;
  }

  public get nextMeeting(): string { // in format like 6/13/22
    let nextMeeting: string = null;
    this.futureMeetingDates.forEach((meetingDate) => {
      const meetingDateParsed = Date.parse(meetingDate);
      if (!nextMeeting) { // if no next range picked, take this as default
        nextMeeting = meetingDate;
      } else {
        const nextMeetingDateParsed = Date.parse(nextMeeting);
        if (nextMeetingDateParsed > meetingDateParsed) { // if this is earlier than the current next range picked, replace it
          nextMeeting = meetingDate;
        }
      }
    });
    return nextMeeting;
  }

  public get currentDateParsed() {
    const currentDate = this.currentTime.split(" ")[0];
    return Date.parse(currentDate);
  }

  public get isWithinAcceptableDates(): boolean {
    const startDateParsed = Date.parse(this.nextMeetingSubmissionStart);
    const endDateParsed = Date.parse(this.nextMeetingSubmissionEnd);

    const afterStart = startDateParsed <= this.currentDateParsed;
    const beforeEnd = endDateParsed >= this.currentDateParsed;
    const isLastDayAfter5PM = endDateParsed === this.currentDateParsed && this.isPast5pm;
    return afterStart && beforeEnd && !isLastDayAfter5PM;
  }

  public get isPast5pm(): boolean {
    const FIVE_PM = 17;
    return this.isPastHour(FIVE_PM);
  }

  public get canSubmit(): boolean {
    return this.allSet;
  }

  public get allSet(): boolean {
    return this.email !== "" && this.name !== "" && this.address !== ""
      && this.city !== "" && this.state !== "" && this.topic !== "";
  }

  public get displayMeetingDay(): string { // in format like June 13, 2022
    return this.convertMDYtoDisplayDate(this.nextMeeting);
  }

  public get displaySubmissionEndDate(): string { // in format like June 13, 2022
    return this.convertMDYtoDisplayDate(this.nextMeetingSubmissionEnd);
  }

  public get displaySubmissionStartDate(): string { // in format like June 13, 2022
    return this.convertMDYtoDisplayDate(this.nextMeetingSubmissionStart);
  }

  public get body(): string {
    const greeting = `Hello City Clerk,`;
    const request = `I am requesting to speak at the ${this.displayMeetingDay} Regular City Council Meeting.`;
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
    return `Request to Sign Up to Speak on ${this.displayMeetingDay}`;
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

  public isPastHour(hourToCheck: number): boolean {
    const isPM = this.currentTime.split(" ")[2] === "PM";
    const currentHourUnadjusted = Number(this.currentTime.split(" ")[1].split(":")[0]);
    const currentHourAdjusted = isPM ? currentHourUnadjusted + 12 : currentHourUnadjusted;
    return currentHourAdjusted >= hourToCheck;
  }

  public convertMDYtoDisplayDate(date: string) {
    return DateHelper.convertMDYtoDisplayDate(date);
  }

}
