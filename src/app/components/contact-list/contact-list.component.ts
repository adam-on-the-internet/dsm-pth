import {Component, OnInit} from "@angular/core";
import {LinkService} from "../../services/link.service";
import {CONTACTS, MAIN_CITY_CONTACTS} from "../../constants/contact-constants";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent implements OnInit {
  public contactList = CONTACTS;
  public mainContactList = MAIN_CITY_CONTACTS;

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
    return `${this.mailtoLink}?subject=Make Meetings Public&body=The City of Des Moines must immediately offer hybrid meetings, in-person and virtual, or return to virtual-only meetings. The current meetings are not accessible to the people of Des Moines.`;
  }

  constructor(
    public linkService: LinkService,
  ) {
  }

  ngOnInit() {
  }

}
