import { TestBed } from '@angular/core/testing';

import { ViewsortedlistService } from './viewsortedlist.service';

describe('ViewsortedlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewsortedlistService = TestBed.get(ViewsortedlistService);
    expect(service).toBeTruthy();
  });
});
