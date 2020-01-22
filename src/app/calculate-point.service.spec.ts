import { TestBed } from '@angular/core/testing';

import { CalculatePointService } from './calculate-point.service';

describe('CalculatePointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatePointService = TestBed.get(CalculatePointService);
    expect(service).toBeTruthy();
  });
});
