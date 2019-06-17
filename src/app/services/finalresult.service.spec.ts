import { TestBed } from '@angular/core/testing';

import { FinalresultService } from './finalresult.service';

describe('FinalresultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinalresultService = TestBed.get(FinalresultService);
    expect(service).toBeTruthy();
  });
});
