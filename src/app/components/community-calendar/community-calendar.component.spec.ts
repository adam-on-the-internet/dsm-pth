import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {CommunityCalendarComponent} from "./community-calendar.component";
import {CardComponent} from "../simple/card/card.component";

describe("CommunityCalendarComponent", () => {
  let component: CommunityCalendarComponent;
  let fixture: ComponentFixture<CommunityCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityCalendarComponent, CardComponent],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
