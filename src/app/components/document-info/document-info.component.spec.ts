import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {DocumentInfoComponent} from "./document-info.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {CardComponent} from "../simple/card/card.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("DocumentInfoComponent", () => {
  let component: DocumentInfoComponent;
  let fixture: ComponentFixture<DocumentInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentInfoComponent, LoadingComponent, CardComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
