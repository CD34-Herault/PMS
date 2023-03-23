import { TestBed } from '@angular/core/testing';

import { HoraireMajServeurService } from './horaire-maj-serveur.service';

describe('HoraireMajServeurService', () => {
  let service: HoraireMajServeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoraireMajServeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
