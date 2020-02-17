import { TestBed } from '@angular/core/testing';

import { CostCalculationService } from './cost-calculation.service';

describe('CostCalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostCalculationService = TestBed.get(CostCalculationService);
    expect(service).toBeTruthy();
  });
});
