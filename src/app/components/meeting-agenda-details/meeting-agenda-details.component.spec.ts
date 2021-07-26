import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MeetingAgendaDetailsComponent} from './meeting-agenda-details.component';
import {LoadingComponent} from "../simple/loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('MeetingAgendaDetailsComponent', () => {
  let component: MeetingAgendaDetailsComponent;
  let fixture: ComponentFixture<MeetingAgendaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingAgendaDetailsComponent, LoadingComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingAgendaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
