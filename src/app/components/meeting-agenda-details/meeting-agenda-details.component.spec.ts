import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MeetingAgendaDetailsComponent} from "./meeting-agenda-details.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {LinkDisplayComponent} from "../link-display/link-display.component";
import {QuillViewDefaultComponent} from "../quill-view-default/quill-view-default.component";
import {ModalBoxBasicComponent} from "../simple/modal-box-basic/modal-box-basic.component";
import {ModalTriggerButtonComponent} from "../simple/modal-trigger-button/modal-trigger-button.component";

describe("MeetingAgendaDetailsComponent", () => {
  let component: MeetingAgendaDetailsComponent;
  let fixture: ComponentFixture<MeetingAgendaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeetingAgendaDetailsComponent, LoadingComponent, LinkDisplayComponent,
        QuillViewDefaultComponent, ModalBoxBasicComponent, ModalTriggerButtonComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingAgendaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
