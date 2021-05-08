import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {DocumentArchiveComponent} from "./document-archive.component";
import {RouterTestingModule} from "@angular/router/testing";
import {CardComponent} from "../simple/card/card.component";
import {LoadingComponent} from "../simple/loading/loading.component";

describe("DocumentArchiveComponent", () => {
  let component: DocumentArchiveComponent;
  let fixture: ComponentFixture<DocumentArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentArchiveComponent, CardComponent, LoadingComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
