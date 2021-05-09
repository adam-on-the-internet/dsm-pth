import {Component, OnInit} from "@angular/core";
import {LinkService} from "../../services/link.service";
import {CONTACTS} from "../../constants/contact-constants";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent implements OnInit {
  public contactList = CONTACTS;

  constructor(
    public linkService: LinkService,
  ) {
  }

  ngOnInit() {
  }

}
