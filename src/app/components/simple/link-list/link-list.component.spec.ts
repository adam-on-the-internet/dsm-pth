import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {LinkListComponent} from "./link-list.component";
import {FormsModule} from "@angular/forms";
import {StringInputComponent} from "../form/string-input/string-input.component";

describe("LinkListComponent", () => {
  let component: LinkListComponent;
  let fixture: ComponentFixture<LinkListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LinkListComponent, StringInputComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
