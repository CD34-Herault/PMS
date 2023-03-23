import { TestBed } from '@angular/core/testing';

import { PlannificationExceptionnelService } from './plannification-exceptionnel.service';

describe('PlannificationExceptionnelService', () => {
  let service: PlannificationExceptionnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlannificationExceptionnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
