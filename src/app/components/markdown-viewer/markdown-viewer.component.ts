import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: "app-markdown-viewer",
  templateUrl: "./markdown-viewer.component.html",
  styleUrls: ["./markdown-viewer.component.css"]
})
export class MarkdownViewerComponent implements OnInit {
  public path: string = null;

  public get ready(): boolean {
    return this.path !== null;
  }

  public get fullPath(): string {
    return `assets/${this.path}.md`;
  }

  public get isAgenda(): boolean {
    return this.path.startsWith("agenda/");
  }

  public get hasAgendaNotesUrl(): boolean {
    return this.isAgenda && this.path.includes("/transcription/");
  }

  public get agendaNotesUrl(): string {
    let _url = this.path.replace(/\//g, "~");
    _url = _url.replace("~transcription", "");
    return `#/view/${_url}`;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.setPath();
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.setPath();
        }
      });
  }

  private setPath() {
    const rawPath = this.route.snapshot.paramMap.get("path");
    this.path = rawPath.replace(/~/g, "/");
  }
}
