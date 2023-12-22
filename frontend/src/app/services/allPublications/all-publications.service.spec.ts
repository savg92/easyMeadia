import { TestBed } from '@angular/core/testing';

import { AllPublicationsService } from './all-publications.service';

describe('AllPublicationsService', () => {
  let service: AllPublicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPublicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
