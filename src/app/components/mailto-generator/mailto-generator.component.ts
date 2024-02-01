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

  public to: string = "Fcownie@dmgov.org,carlvoss@dmgov.org,Connieboesen@dmgov.org,Citymanager@dmgov.org,chriscoleman@dmgov.org,Joshmandelbaum@dmgov.org,Joegatto@dmgov.org,LindaW@dmgov.org";
  public subject: string = "DART Funding";
  public cc: string = "";
  public bcc: string = "";
  public name: string = "";

  public personalNote: string = "";

  public get toDisplay(): string {
    return this.to.replace(/;/g, "; ");
  }

  private get paddedPersonalNote(): string {
    if (this.personalNote && this.personalNote.trim().length > 0) {
    return `
<p>
${this.personalNote}
</p>
`
    } else {
      return "";
    }
  }

  public get body(): string {
    return `
<p>To whom it may concern:</p>
${this.paddedPersonalNote}
<p>
I am reaching out as a concerned citizen about DART facing a 40% cut in services and the cities response to houseless folks during negative temperatures. During our past extreme winter storm our houseless folks were stuck in the cold, finding warmth in our DART buses as they rode- for free, to a warming shelter. But, sometimes they don't make it to a warming shelter- or the warming shelter is closed. We need 24/7 warming and cooling centers. This has become a more pressing issue with someone passing away due to these conditions.  It is also not helpful when our local police force forcefully evicts houseless people during abhorrent weather.
</p>
<p>
Recently the city purchased a new building to harbor the Des Moines Police department and the armory. Spending at least $56 million with no town halls or public meetings sharing their concerns with this purchase. If we have money for a new building, we should have the funds to house the houseless and save DART.
</p>
<p>
Transit is the backbone of an accessible city, it connects everyday people to their jobs (57% of riders), to appointments, home, the grocery store and many essentials (61% of riders do not have a license). Not only are 100% of the riders reliant on DART, so are the drivers and workers for DART. If DART services get cut by 40%, many routes will be cut- resulting in many drivers and employees losing their jobs. Imagine if you relied on DART to make it to a council meeting, only to realize your normal bus route no longer exists, making you miss your work.
</p>
<p>
Des Moines has the power to save DART, whether it be raising the franchise agreement from 1.5%-2.5%, taking taxes from car registrations, sale taxes or car rentals. 50% of buildings in Des Moines do not pay a franchise fee but benefit from DART. While our general population has grown by over 20%, transit has only grown 1%, if we want to see Des Moines thrive and bring more diverse people to this city, we must save DART.
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
