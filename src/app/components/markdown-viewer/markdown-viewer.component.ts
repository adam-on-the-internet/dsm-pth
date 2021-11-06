import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-markdown-viewer",
  templateUrl: "./markdown-viewer.component.html",
  styleUrls: ["./markdown-viewer.component.css"]
})
export class MarkdownViewerComponent implements OnInit {
  private path: string = null;

  public get ready(): boolean {
    return this.path !== null;
  }

  public get fullPath(): string {
    return `assets/${this.path}.md`;
  }

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.path = this.route.snapshot.paramMap.get("path");
  }

}
