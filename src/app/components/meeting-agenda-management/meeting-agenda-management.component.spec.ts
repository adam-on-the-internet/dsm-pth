import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MeetingAgendaManagementComponent} from './meeting-agenda-management.component';

describe('MeetingAgendaManagementComponent', () => {
  let component: MeetingAgendaManagementComponent;
  let fixture: ComponentFixture<MeetingAgendaManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingAgendaManagementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingAgendaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
