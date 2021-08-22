import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MeetingAgendaFormComponent} from "./meeting-agenda-form.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from "@angular/forms";
import {StringInputComponent} from "../simple/form/string-input/string-input.component";
import {StringListInputComponent} from "../simple/form/string-list-input/string-list-input.component";
import {LinkListComponent} from "../simple/link-list/link-list.component";
import {NumberInputComponent} from "../simple/form/number-input/number-input.component";
import {QuillEditorDefaultComponent} from "../quill-editor-default/quill-editor-default.component";
import {QuillModule} from "ngx-quill";

describe("MeetingAgendaFormComponent", () => {
  let component: MeetingAgendaFormComponent;
  let fixture: ComponentFixture<MeetingAgendaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeetingAgendaFormComponent, LoadingComponent, StringInputComponent,
        StringListInputComponent, LinkListComponent, NumberInputComponent,
        QuillEditorDefaultComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, QuillModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingAgendaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
