import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MeetingAgendaManagementComponent} from "./meeting-agenda-management.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("MeetingAgendaManagementComponent", () => {
  let component: MeetingAgendaManagementComponent;
  let fixture: ComponentFixture<MeetingAgendaManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingAgendaManagementComponent, LoadingComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingAgendaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
