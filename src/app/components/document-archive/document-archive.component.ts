import { Component, OnInit } from "@angular/core";
import {DOCUMENTS} from "../../constants/document-constants";
import {NavHelperService} from "../../services/nav-helper.service";
import {DocumentInfo} from "../../models/DocumentInfo.model";

@Component({
  selector: "app-document-archive",
  templateUrl: "./document-archive.component.html",
  styleUrls: ["./document-archive.component.scss"]
})
export class DocumentArchiveComponent implements OnInit {
  public documents = DOCUMENTS;

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
  }

  public goToDocument(document: DocumentInfo): void {
    this.navHelper.goToDocument(document);
  }

}
