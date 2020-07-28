import { TestBed } from '@angular/core/testing';

import { LoaddynamicserviceService } from './loaddynamicservice.service';

describe('LoaddynamicserviceService', () => {
  let service: LoaddynamicserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaddynamicserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
