import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {PublishedAgendaListComponent} from "./published-agenda-list.component";
import {LinkDisplayComponent} from "../link-display/link-display.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CardComponent} from "../simple/card/card.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("PublishedAgendaListComponent", () => {
  let component: PublishedAgendaListComponent;
  let fixture: ComponentFixture<PublishedAgendaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublishedAgendaListComponent, LinkDisplayComponent, CardComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedAgendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
