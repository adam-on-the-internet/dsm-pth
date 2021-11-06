import {Component} from "@angular/core";
import {LinkService} from "../../services/link.service";
import {ALL_CITY_CONTACTS, CONTACT_GROUPS, SPECIAL_CONTACTS} from "../../constants/contact-constants";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent {
  public allCityContacts = ALL_CITY_CONTACTS;
  public contactGroups = CONTACT_GROUPS;
  public specialContacts = SPECIAL_CONTACTS;

  constructor(
    public linkService: LinkService,
  ) {
  }

  public getParsedPhone(phoneNumber: string): string {
    return phoneNumber.replace(/-/g, "");
  }

}
