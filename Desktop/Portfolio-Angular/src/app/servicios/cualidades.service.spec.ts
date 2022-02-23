import { TestBed } from '@angular/core/testing';

import { CualidadesService } from './cualidades.service';

describe('CualidadesService', () => {
  let service: CualidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CualidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
