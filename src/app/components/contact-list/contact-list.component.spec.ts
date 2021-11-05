import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {ContactListComponent} from "./contact-list.component";
import {CardComponent} from "../simple/card/card.component";

describe("ContactListComponent", () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListComponent, CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
