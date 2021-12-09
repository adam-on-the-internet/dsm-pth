import { TestBed } from '@angular/core/testing';

import { CouncilMeetingService } from './council-meeting.service';

describe('CouncilMeetingService', () => {
  let service: CouncilMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouncilMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
