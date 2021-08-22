import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuillViewDefaultComponent } from "./quill-view-default.component";

describe("QuillViewDefaultComponent", () => {
  let component: QuillViewDefaultComponent;
  let fixture: ComponentFixture<QuillViewDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuillViewDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillViewDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
