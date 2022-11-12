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

  public to: string = "dsmpeoplestownhall@gmail.com,";
  public subject: string = "Project XYZ Demands";
  public cc: string = "";
  public bcc: string = "";
  public name: string = "";

  public personalNote: string = "";

  public get toDisplay(): string {
    return this.to.replace(/;/g, "; ");
  }

  public get body(): string {
    return `
<p>Dear XYZ,</p>

<p>
    I am writing to demand that...
</p>

<p>
${this.personalNote}
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
