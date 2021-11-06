import {ComponentFixture, TestBed} from "@angular/core/testing";

import {MarkdownViewerComponent} from "./markdown-viewer.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {CardComponent} from "../simple/card/card.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("MarkdownViewerComponent", () => {
  let component: MarkdownViewerComponent;
  let fixture: ComponentFixture<MarkdownViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkdownViewerComponent, LoadingComponent, CardComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
