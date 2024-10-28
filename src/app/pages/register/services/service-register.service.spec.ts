import { TestBed } from '@angular/core/testing';

import { ServiceRegisterService } from './service-register.service';

describe('ServiceRegisterService', () => {
  let service: ServiceRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
