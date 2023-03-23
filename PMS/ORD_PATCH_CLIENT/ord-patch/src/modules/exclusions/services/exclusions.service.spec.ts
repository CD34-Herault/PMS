import { TestBed } from '@angular/core/testing';

import { ExclusionsService } from './exclusions.service';

describe('ExclusionsService', () => {
  let service: ExclusionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExclusionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
