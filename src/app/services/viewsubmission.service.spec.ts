import { TestBed } from '@angular/core/testing';

import { ViewsubmissionService } from './viewsubmission.service';

describe('ViewsubmissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewsubmissionService = TestBed.get(ViewsubmissionService);
    expect(service).toBeTruthy();
  });
});
