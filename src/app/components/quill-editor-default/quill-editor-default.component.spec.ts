import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {QuillEditorDefaultComponent} from "./quill-editor-default.component";
import {FormsModule} from "@angular/forms";
import {QuillModule} from "ngx-quill";
import {LoadingComponent} from "../simple/loading/loading.component";

describe("QuillEditorDefaultComponent", () => {
  let component: QuillEditorDefaultComponent;
  let fixture: ComponentFixture<QuillEditorDefaultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [QuillEditorDefaultComponent, LoadingComponent],
      imports: [FormsModule, QuillModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillEditorDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
