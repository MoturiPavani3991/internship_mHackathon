import { TestBed } from '@angular/core/testing';

import { TeaminfoService } from './teaminfo.service';

describe('TeaminfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeaminfoService = TestBed.get(TeaminfoService);
    expect(service).toBeTruthy();
  });
});
