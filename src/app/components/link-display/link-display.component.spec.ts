import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { LinkDisplayComponent } from "./link-display.component";

describe("LinkDisplayComponent", () => {
  let component: LinkDisplayComponent;
  let fixture: ComponentFixture<LinkDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
