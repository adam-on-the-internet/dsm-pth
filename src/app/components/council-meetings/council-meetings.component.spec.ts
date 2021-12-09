import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilMeetingsComponent } from './council-meetings.component';

describe('CouncilMeetingsComponent', () => {
  let component: CouncilMeetingsComponent;
  let fixture: ComponentFixture<CouncilMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouncilMeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
