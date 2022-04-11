import {Component} from '@angular/core';
import {MailUtil} from "../../utilities/mail.util";

@Component({
  selector: 'app-mailto-generator',
  templateUrl: './mailto-generator.component.html',
  styleUrls: ['./mailto-generator.component.css']
})
export class MailtoGeneratorComponent {
  public open = true;
  public showConsentNotes = false;

  public to: string = "Fcownie@dmgov.org,carlvoss@dmgov.org,Connieboesen@dmgov.org,LindaW@dmgov.org,Joshmandelbaum@dmgov.org,Joegatto@dmgov.org,indiras@dmgov.org,Citymanager@dmgov.org,";
  public subject: string = "Rename George Flagg Parkway";
  public cc: string = "";
  public bcc: string = "";
  public name: string = "";

  public personalNote: string = "";

  public get toDisplay(): string {
    return this.to.replace(/;/g, "; ");
  }

  public get body(): string {
    return `
<p>Dear City Council, Mayor, and City Manager,</p>

<p>
    I am writing to request that the City rename George Flagg Parkway and hold a public meeting
    on what the new street name should be.
</p>

<p>
${this.personalNote}
</p>

<p>
    Former Council Member George Flagg took many discriminatory actions while serving on Council,
    and his name should not be honored on a City road. As the City is currently invested in restoring the road,
    the City should use this opportunity to remove the name George Flagg.
</p>

<p>
    During his time on Council, George Flagg voted to deny liquor licenses to applicants with "foreign" sounding names.
    He was also openly anti-gay and campaigned on a racially biased tough-on-crime platform.
</p>

<p>
    The street's name was changed from Valley Drive to George Flagg Parkway in a controversial surprise move
    as a commendation to George Flagg,
    without taking public comment.
    To correct this, we are asking that the City hold a public meeting to select a new name rather than
    selecting another name privately.
</p>

<p>
    You can learn more in this article published in the Des Moines Register:
</p>

<p>
  <a href="https://www.desmoinesregister.com/story/opinion/columnists/iowa-view/2022/04/07/des-moines-george-flagg-parkway-rename-street/9484958002/">
  Register Article: Opinion: Des Moines should rename George Flagg Parkway (and make it safer for animals while they're at it)
  </a>
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
