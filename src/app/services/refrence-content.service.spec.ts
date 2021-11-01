import { TestBed } from '@angular/core/testing';

import { RefrenceContentService } from './refrence-content.service';

describe('RefrenceContentService', () => {
  let service: RefrenceContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefrenceContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
