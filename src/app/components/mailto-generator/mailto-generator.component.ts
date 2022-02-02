import {Component} from '@angular/core';
import {MailUtil} from "../../utilities/mail.util";

@Component({
  selector: 'app-mailto-generator',
  templateUrl: './mailto-generator.component.html',
  styleUrls: ['./mailto-generator.component.css']
})
export class MailtoGeneratorComponent {
  public to: string = "CityClerk@dmgov.org;Fcownie@dmgov.org;carlvoss@dmgov.org;Connieboesen@dmgov.org;LindaW@dmgov.org;Joshmandelbaum@dmgov.org;Joegatto@dmgov.org;indiras@dmgov.org;Citymanager@dmgov.org;maanderson@dmgov.org;pscooksey@dmgov.org;mahankins@dmgov.org;JLSchulte@dmgov.org;";
  public subject: string = "Cops Off Consent";
  public cc: string = "";
  public bcc: string = "";
  public name: string = "";
  public personalNote: string = "";

  public get toDisplay(): string {
    return this.to.replace(/;/g, "; ");
  }

  public get body(): string {
    return `
<p>Dear City Clerk, City Managers, City Council, and Mayor,</p>

<p>
${this.personalNote}
</p>

<p>
The City of Des Moines explicitly designates the Consent Agenda for "routine non-controversial items".
The City Clerk is responsible for preparing these items, under the authority of the City Manager.
The City of Des Moines has been constantly placing controversial items on this agenda
and refusing to allow public requests for removal and discussion
to a degree not seen in other cities.
</p>

<p>
For the 2/7/22 meeting I am requesting that you don't include agenda items about policing on the Consent Agenda.
You are all well aware by this point that items related to law enforcement are controversial in Des Moines.
Putting items on the Consent Agenda to block comments and avoid discussion is inappropriate, insulting, and makes a mockery of the city's meetings.
</p>

<p>
From the City's own rules:
</p>

<p>
Rule 9. Consent Agenda
</p>
<p>
In preparing an Agenda the City Clerk shall separately designate items as "Consent Agenda" which may be acted upon by the Council under Rule 37.
The "Consent Agenda" shall consist of routine non-controversial items which in the City Clerk's determination can be appropriately considered
in bulk at the Council meeting.
</p>

<p>
Thank you,
<br>
${this.name}
</p>
`;
  }

  public get mailto(): string {
    return MailUtil.buildMailto(this.to, this.subject, this.body, this.cc, this.bcc);
  }

  public get allSet(): boolean {
    return this.to !== "" && this.subject !== "" && this.body !== "" && this.name !== "";
  }

  public copyLinkToClipboard() {
    // TODO copy to clipboard
    // /* Get the text field */
    // var copyText = document.getElementById("mailto-link");
    //
    // /* Select the text field */
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
    //
    // /* Copy the text inside the text field */
    // navigator.clipboard.writeText(copyText.value);
    //
    // /* Alert the copied text */
    // alert("Copied the text: " + copyText.value);
  }

}
