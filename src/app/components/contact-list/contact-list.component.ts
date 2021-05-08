import { Component, OnInit } from "@angular/core";
import {LinkService} from "../../services/link.service";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent implements OnInit {

  constructor(
    public linkService: LinkService,
  ) { }

  ngOnInit() {
  }

}
