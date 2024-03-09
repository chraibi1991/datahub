import { TestBed } from '@angular/core/testing';

import { UpdatenetworkService } from './updatenetwork.service';

describe('UpdatenetworkService', () => {
  let service: UpdatenetworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatenetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
