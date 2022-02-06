import {Component} from '@angular/core';
import {MailUtil} from "../../utilities/mail.util";
import {LinkService} from "../../services/link.service";
import {OPEN_RECORDS_COORDINATOR} from "../../constants/contact-constants";
import {Email} from "../../models/Email.model";

@Component({
  selector: 'app-city-foia',
  templateUrl: './city-foia.component.html',
  styleUrls: ['./city-foia.component.css']
})
export class CityFoiaComponent {
  public name: string = "";
  public emailAddress: string = "";
  public phone: string = "";
  public address: string = "";
  public request: string = "";

  public get email(): Email {
    return {
      to: OPEN_RECORDS_COORDINATOR.email,
      subject: "Public Record Request",
      bcc: this.emailAddress,
      body: this.body,
    };
  }

  public get body(): string {
    return `
Dear Lisa Mickey,
<br>
<br>
I am submitting a request as follows:
<br>
<br>
Name = ${this.name}
<br>
Mailing Address = ${this.address}
<br>
Daytime Phone Number = ${this.phone}
<br>
Email Address = ${this.emailAddress}
<br>
Request =
<br>
${this.request}
<br>
<br>
I would prefer the results to be emailed to me.
<br>
<br>
Thank you,
<br>
${this.name}
`;
  }

  public get mailto(): string {
    return MailUtil.buildMailtoFromEmail(this.email);
  }

  public get allSet(): boolean {
    return this.name !== ""
      && this.address !== ""
      && this.phone !== ""
      && this.emailAddress !== ""
      && this.request !== "";
  }

  constructor(
    public linkService: LinkService,
  ) {
  }

}
