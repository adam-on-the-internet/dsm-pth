import {TestBed} from '@angular/core/testing';

import {DsmCityUpdateService} from './dsm-city-update.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DsmCityUpdateService', () => {
  let service: DsmCityUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DsmCityUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
