import { TestBed } from '@angular/core/testing';

import { ProtocolsContentService } from './protocols-content.service';

describe('ProtocolsContentService', () => {
  let service: ProtocolsContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtocolsContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
