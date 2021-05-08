import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DOCUMENTS} from "../../constants/document-constants";
import {DocumentInfo} from "../../models/DocumentInfo.model";

@Component({
  selector: "app-document-info",
  templateUrl: "./document-info.component.html",
  styleUrls: ["./document-info.component.scss"]
})
export class DocumentInfoComponent implements OnInit {
  public doc: DocumentInfo = null;

  public get ready(): boolean {
    return this.doc !== null;
  }

  public get error(): boolean {
    return this.doc === undefined;
  }

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.loadApp();
  }

  private loadApp(): void {
    const link = this.route.snapshot.paramMap.get("link");
    this.doc = DOCUMENTS.find((doc) => {
      return doc.link === link;
    });
  }

}
