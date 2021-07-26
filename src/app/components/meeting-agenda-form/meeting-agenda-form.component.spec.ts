import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MeetingAgendaFormComponent} from './meeting-agenda-form.component';
import {LoadingComponent} from "../simple/loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from "@angular/forms";

describe('MeetingAgendaFormComponent', () => {
  let component: MeetingAgendaFormComponent;
  let fixture: ComponentFixture<MeetingAgendaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingAgendaFormComponent, LoadingComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingAgendaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
