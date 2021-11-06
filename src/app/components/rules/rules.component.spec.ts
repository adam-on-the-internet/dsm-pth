import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {RulesComponent} from "./rules.component";
import {CardComponent} from "../simple/card/card.component";

describe("RulesComponent", () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RulesComponent, CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
