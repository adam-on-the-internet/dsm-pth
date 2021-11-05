import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {AgendaItemDetailsComponent} from "./agenda-item-details.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {QuillViewDefaultComponent} from "../quill-view-default/quill-view-default.component";

describe("AgendaItemDetailsComponent", () => {
  let component: AgendaItemDetailsComponent;
  let fixture: ComponentFixture<AgendaItemDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaItemDetailsComponent, LoadingComponent, QuillViewDefaultComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
