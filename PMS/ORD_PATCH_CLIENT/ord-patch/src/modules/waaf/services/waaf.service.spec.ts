import { TestBed } from '@angular/core/testing';

import { WaafService } from './waaf.service';

describe('WaafService', () => {
  let service: WaafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
