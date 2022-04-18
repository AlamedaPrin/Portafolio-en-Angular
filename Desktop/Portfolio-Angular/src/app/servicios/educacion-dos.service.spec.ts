import { TestBed } from '@angular/core/testing';

import { EducacionDosService } from './educacion-dos.service';

describe('EducacionDosService', () => {
  let service: EducacionDosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacionDosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
