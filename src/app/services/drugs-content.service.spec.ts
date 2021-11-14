import { TestBed } from '@angular/core/testing';

import { DrugsContentService } from './drugs-content.service';

describe('DrugsContentService', () => {
  let service: DrugsContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugsContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
