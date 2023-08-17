import { TestBed } from '@angular/core/testing';

import { CarmodelsService } from './carmodels.service';

describe('CarmodelsService', () => {
  let service: CarmodelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarmodelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
