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

  public to: string = "beth.skinner@iowa.gov";
  public subject: string = "2022 Demands";
  public cc: string = "";
  public bcc: string = "";
  public name: string = "";

  public personalNote: string = "";

  public get toDisplay(): string {
    return this.to.replace(/;/g, "; ");
  }

  public get body(): string {
    return `
<p>Dear Beth Skinner,</p>

<p>
${this.personalNote}
</p>
<p>𝗯𝗼𝗹𝗱</p>
<p>
Following an incident at Anamosa State Penitentiary in March 2021, the Iowa Department of Corrections issued an onslaught of new “security” measures for all of Iowa’s prisons. These measures effectively constitute a collective punishment for all incarcerated people across the state on account of the actions of a couple individuals. Contrary to what the DoC would have us believe, the deaths of two COs in Anamosa occurred
<a href="https://drive.google.com/file/d/1BL-J9XkCEpWywmFNH9ppZ5nltpRy7hw8/view?usp=sharing">
on account of prison staff failing to follow security measures
</a>
and a lack of mental health resources for incarcerated individuals.
</p>

<p>
The result of the new changes has been a severe restriction on incarcerated people’s access to communication with friends and family on the outside. This has had further detrimental impacts on the mental health of both incarcerated people and the many people trying to get in touch with loved ones on the other side of the prison walls. Pushing people away from their family and friends does not bring safety and security to people in prisons or outside communities. These changes further propel a system which strips away dignity and humanity, preventing any chance of healing and rehabilitation. In response, we raise forth these demands on behalf of incarcerated people in Iowa as a continuation of the
<a href="https://docs.google.com/document/d/1nfT27BuXFHvqC1NzPdeU5_GlNch1pYqgtbz-YzcdKCg/edit">
demands issued in January 2021
</a>
about the DoC’s mishandling of the COVID-19 pandemic, many of which are issues which continue to persist today:
</p>
<p>--------</p>
<p>
<strong>
Decarceration. Minimize the number of individuals being arrested. Parole boards must release people and the governor must commute sentences in order to decrease the prison/jail population enough to allow for safety protocols.
</strong>
</p>
<p>
<strong>
Suspend ICE enforcement and release Immigrants in ICE custody--especially individuals that are most vulnerable to the virus. The majority of people being detained by ICE are no danger to the community.
</strong>
</p>
<p>--------</p>
<p>
<strong>
Communication Demands:
</strong>
</p>
<p>
<strong>
Reinstate the prior visitation policy for in-person visits of five days a week, eight times per person per month, with visitors able to come during visiting hours when convenient for them. Weekend visits should not count as “special visits,” but rather as two of the eight allotted visits.
</strong>
With the new policy, each individual is only allowed one in-person visit and one video visit per week, which is a huge burden on people with large families and support networks, especially for family and friends who visit from out of town.
</p>
<p>
<strong>
Eliminate strip searches and visitation room clothing for video visits.
</strong>
There is no security risk in conducting a video call, and therefore no need to strip search people prior to these visits. The required visitation clothing, which is already worn out and undignifying to wear, leaves few clean clothes for people that have in person visits. This is dehumanizing and unnecessary.
</p>
<p>
<strong>
Eliminate the need to sign up for visitations on the Ameelio app in advance.
</strong>
It is difficult for visitors to find time slots that work for their schedules and to plan visits less than one week in advance, and not all visitors have access to a smart device to sign up through the app.
</p>
<p>
<strong>
Allow video visits to occur on all weekdays and return to the Google Hangouts platform where multiple people can join the same call from different locations.
</strong>
Currently video visits can only be scheduled on Mondays and Fridays with one visitor at a time (unless visitors call in from the same location).
</p>
<p>
<strong>
Ensure that snail mail and photographs arrive in a timely manner (less than two weeks delivery) with no additional financial barriers besides postage.
</strong>
Currently the mail system through Pigeonly takes anywhere from two weeks to multiple months for mail to be delivered to people in prison.
</p>
<p>
<strong>
Ensure that any copies of photographs received by mail are of good or original quality.
</strong>
Scanned copies of photos on printer paper make images appear blurry, and they are often folded up and creased down the middle when received.
</p>
<p>--------</p>
<p>
<strong>
Additional Demands:
</strong>
</p>
<p>
<strong>
Eliminate requirement of wearing wristbands to indicate tip level.
</strong>
Incarcerated people in Iowa already have colored stickers on their ID cards so that staff can check their levels. Wearing wristbands is unnecessary and dehumanizing.
</p>
<p>
<strong>
Pay all incarcerated workers a living wage.
</strong>
Prices of commissary products have doubled, and even tripled in the past months with no increases in wages for incarcerated workers.
</p>
<p>
<strong>
Provide adequate mental health services and resources for all incarcerated people who want or need them, and ensure these services are available at all times.
</strong>
</p>
<p>
<strong>
Allow incarcerated people to access all media and music purchased on their tablets if the state switches to a new vendor.
</strong>
</p>
<p>
<strong>
Clarify the specific parameters and guidelines used to determine whether or not an individual’s commutation will be approved by the governor.
</strong>
Since beginning her term in office, the governor has denied every commutation request, regardless of the parole board’s recommendation on the basis of criminal record and severity of crime, conditions which cannot be changed by an individual making efforts at character improvement. In order for this process to be useful at all, individuals need to know exactly what they need to do in order to successfully receive a sentence commutation.
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
