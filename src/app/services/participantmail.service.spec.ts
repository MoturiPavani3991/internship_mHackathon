import { TestBed } from '@angular/core/testing';

import { ParticipantmailService } from './participantmail.service';

describe('ParticipantmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticipantmailService = TestBed.get(ParticipantmailService);
    expect(service).toBeTruthy();
  });
});
