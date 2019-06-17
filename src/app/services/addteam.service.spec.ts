import { TestBed } from '@angular/core/testing';

import { AddteamService } from './addteam.service';

describe('AddteamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddteamService = TestBed.get(AddteamService);
    expect(service).toBeTruthy();
  });
});
