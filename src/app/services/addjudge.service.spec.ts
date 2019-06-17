import { TestBed } from '@angular/core/testing';

import { AddjudgeService } from './addjudge.service';

describe('AddjudgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddjudgeService = TestBed.get(AddjudgeService);
    expect(service).toBeTruthy();
  });
});
