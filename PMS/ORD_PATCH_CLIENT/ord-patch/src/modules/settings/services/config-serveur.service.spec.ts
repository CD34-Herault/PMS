import { TestBed } from '@angular/core/testing';

import { ConfigServeurService } from './config-serveur.service';

describe('ConfigServeurService', () => {
  let service: ConfigServeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigServeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
