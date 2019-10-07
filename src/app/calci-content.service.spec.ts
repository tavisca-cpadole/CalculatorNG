import { TestBed } from '@angular/core/testing';

import { CalciContentService } from './calci-content.service';

describe('CalciContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalciContentService = TestBed.get(CalciContentService);
    expect(service).toBeTruthy();
  });
});
