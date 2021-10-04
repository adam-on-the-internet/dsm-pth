import {Component, OnInit} from "@angular/core";
import {LinkService} from "../../services/link.service";
import {CONTACTS, MAIN_CITY_CONTACTS} from "../../constants/contact-constants";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent {
  public contactList = CONTACTS;
  public mainContactList = MAIN_CITY_CONTACTS;

  // contact council & mayor
  public CONTACT_COUNCIL_AND_MAYOR = "https://tinyurl.com/sf8p5bnh";
  // contact for ward 1 + AL + M
  public CONTACT_WARD_1_REPS = "https://tinyurl.com/49hjaafj";
  // contact for ward 2 + AL + M
  public CONTACT_WARD_2_REPS = "https://tinyurl.com/hhhbye4j";
  // contact for ward 3 + AL + M
  public CONTACT_WARD_3_REPS = "https://tinyurl.com/2kdez3na";
  // contact for ward 4 + AL + M
  public CONTACT_WARD_4_REPS = "https://tinyurl.com/mtzmn9hf";
  // contact at large
  public CONTACT_WARD_AT_LARGE_REPS = "https://tinyurl.com/23pakxu3";
  // contact mayor frank
  public CONTACT_MAYOR = "https://tinyurl.com/ad53ynnk";
  // contact ward 1 bill
  public CONTACT_WARD_1 = "https://tinyurl.com/jw99whe7";
  // contact ward 2 linda
  public CONTACT_WARD_2 = "https://tinyurl.com/2kj8x4yj";
  // contact ward 3 josh
  public CONTACT_WARD_3 = "https://tinyurl.com/4mbx47cv";
  // contact ward 4 joe
  public CONTACT_WARD_4 = "https://tinyurl.com/6p78v94w";
  // contact at large 1 connie
  public CONTACT_AT_LARGE_1 = "https://tinyurl.com/38sxufxa";
  // contact at large 2 carl
  public CONTACT_AT_LARGE_2 = "https://tinyurl.com/59zz84bf";
  // contact city clerk
  public CONTACT_CLERK = "https://tinyurl.com/299rm4bd";
  // contact city attorney
  public CONTACT_ATTORNEY = "https://tinyurl.com/rrcurb44";
  // contact city manager
  public CONTACT_MANAGER = "https://tinyurl.com/w22h3rp7";
  // contact zoning enforcement
  public CONTACT_ZONING = "https://tinyurl.com/8ae4jcuu";
  // request consent item be pulled
  public CONTACT_CLERK_CONSENT = "https://tinyurl.com/5dbeyt6h";

  public get mailtoLink(): string {
    let toAddresses = "";
    this.mainContactList.forEach((contact, index) => {
      if (index > 0) {
        toAddresses += ", ";
      }
      toAddresses += contact.email;
    });
    return `mailto:${toAddresses}`;
  }

  public get mailtoLinkWithDemands(): string {
    // tslint:disable-next-line
    return `${this.mailtoLink}?subject=Make Meetings Public&body=The City of Des Moines must immediately offer hybrid meetings, in-person and virtual, or return to virtual-only meetings. The current meetings are not accessible to the people of Des Moines.`;
  }

  constructor(
    public linkService: LinkService,
  ) {
  }

}
