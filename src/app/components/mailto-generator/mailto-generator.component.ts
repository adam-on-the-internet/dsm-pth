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

  public to: string = "dsmpeoplestownhall@gmail.com";
  public subject: string = "DART Funding";
  public cc: string = "";
  public bcc: string = "";
  public name: string = "";

  public personalNote: string = "";

  public get toDisplay(): string {
    return this.to.replace(/;/g, "; ");
  }

  public get body(): string {
    return `
<p>
To whom it may concern:
</p>

<p>
${this.personalNote}
</p>

<p>
I am reaching out to you as a concerned citizen. Specifically, around DART possibly losing 40% of funding that will represent a huge cut in services. Transit is a human right and a majority of DART riders are Des Moines residents. Over 60% of DART riders do not have valid licenses. Almost 60% of riders rely on DART for transit to-and-from work. As the region's population has grown by 23%, DART has only been able to expand their services by just under 1%.
</p>
<p>
Recently, a DART-funding survey was made available to Des Moines residents, concerning the possible cut to services. This survey presents a false dichotomy. The financial ‘options’ provided for maintaining the current DART services are: raise the franchise fee by 2.5% (which will increase residents’ gas costs by 2.5%) or increase property tax bills by up to $8 for residents who live in the 12 DART metro communities. The simplest solution to the projected $8 million increase in DART service costs during the next 5 years is to save the money the city intends to spend on Nationwide building.
</p>
<p>
Why should Des Moines residents bear the financial brunt of DART cost changes while the city spends tax-payer money on a new building? The Nationwide building will cost taxpayers approximately $56 million, including over $10 million going to a parking garage. The plans for this building is to create more space for the Des Moines Police Department and the Argonne Armory. DMPD already makes up almost 40% of the Des Moines city budget- over $78 million dollars. Time and time again, it has been proven that care for our communities is the preferred use of the budget, rather than more money for policing.
</p>
<p>
As a concerned citizen, I strongly advise that the city hosts public meetings and collects public input on this building purchase. In addition, figure out the best way to save and maintain DART at its current level, without adding additional tax costs to residents.
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
