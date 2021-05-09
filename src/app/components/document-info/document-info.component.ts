import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DOCUMENTS} from "../../constants/document-constants";
import {DocumentInfo} from "../../models/DocumentInfo.model";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";

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

  public get src(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

  public get href(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.link);
  }

  private get link(): string {
    return `/assets/${this.doc.link}`;
  }

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
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
