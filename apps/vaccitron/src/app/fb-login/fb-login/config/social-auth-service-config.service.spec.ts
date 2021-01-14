import { TestBed } from '@angular/core/testing';

import { SocialAuthServiceConfigService } from './social-auth-service-config.service';

describe('SocialAuthServiceConfigService', () => {
  let service: SocialAuthServiceConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialAuthServiceConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
