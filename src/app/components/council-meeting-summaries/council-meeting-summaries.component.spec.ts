import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilMeetingSummariesComponent } from './council-meeting-summaries.component';

describe('CouncilMeetingSummariesComponent', () => {
  let component: CouncilMeetingSummariesComponent;
  let fixture: ComponentFixture<CouncilMeetingSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouncilMeetingSummariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilMeetingSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
