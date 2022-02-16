import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilMeetingGuideComponent } from './council-meeting-guide.component';

describe('CouncilMeetingGuideComponent', () => {
  let component: CouncilMeetingGuideComponent;
  let fixture: ComponentFixture<CouncilMeetingGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouncilMeetingGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilMeetingGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
