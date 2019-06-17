import { TestBed } from '@angular/core/testing';

import { AddscoreService } from './addscore.service';

describe('AddscoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddscoreService = TestBed.get(AddscoreService);
    expect(service).toBeTruthy();
  });
});
