import { TestBed } from '@angular/core/testing';

import { OracionesService } from './oraciones.service';

describe('OracionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OracionesService = TestBed.get(OracionesService);
    expect(service).toBeTruthy();
  });
});
