import { TestBed } from '@angular/core/testing';

import { UpdateGeoJsonService } from './update-geo-json.service';

describe('UpdateGeoJsonService', () => {
  let service: UpdateGeoJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateGeoJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
