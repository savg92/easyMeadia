import { TestBed } from '@angular/core/testing';

import { MessagesByIdService } from './messages-by-id.service';

describe('MessagesByIdService', () => {
  let service: MessagesByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
