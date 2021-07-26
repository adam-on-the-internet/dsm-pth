import {TestBed} from '@angular/core/testing';

import {MeetingAgendaService} from './meeting-agenda.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MeetingAgendaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: MeetingAgendaService = TestBed.get(MeetingAgendaService);
    expect(service).toBeTruthy();
  });
});
