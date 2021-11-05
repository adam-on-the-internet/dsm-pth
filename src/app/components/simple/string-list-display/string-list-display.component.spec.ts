import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { StringListDisplayComponent } from "./string-list-display.component";

describe("StringListDisplayComponent", () => {
  let component: StringListDisplayComponent;
  let fixture: ComponentFixture<StringListDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StringListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
