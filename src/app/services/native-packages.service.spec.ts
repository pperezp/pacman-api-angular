import { TestBed } from '@angular/core/testing';

import { NativePackagesService } from './native-packages.service';

describe('NativePackagesService', () => {
  let service: NativePackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NativePackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
