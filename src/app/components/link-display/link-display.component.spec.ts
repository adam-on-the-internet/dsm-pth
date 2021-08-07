import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LinkDisplayComponent } from "./link-display.component";

describe("LinkDisplayComponent", () => {
  let component: LinkDisplayComponent;
  let fixture: ComponentFixture<LinkDisplayComponent>;

  beforeEach(async(() => {
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
