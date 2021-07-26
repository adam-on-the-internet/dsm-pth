import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MeetingAgendaFormComponent} from './meeting-agenda-form.component';

describe('MeetingAgendaFormComponent', () => {
  let component: MeetingAgendaFormComponent;
  let fixture: ComponentFixture<MeetingAgendaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingAgendaFormComponent]
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
