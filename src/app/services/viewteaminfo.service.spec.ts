import { TestBed } from '@angular/core/testing';

import { ViewteaminfoService } from './viewteaminfo.service';

describe('ViewteaminfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewteaminfoService = TestBed.get(ViewteaminfoService);
    expect(service).toBeTruthy();
  });
});
