import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { QuillViewDefaultComponent } from "./quill-view-default.component";

describe("QuillViewDefaultComponent", () => {
  let component: QuillViewDefaultComponent;
  let fixture: ComponentFixture<QuillViewDefaultComponent>;

  beforeEach(waitForAsync(() => {
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
