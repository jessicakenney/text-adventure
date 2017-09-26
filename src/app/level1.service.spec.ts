import { TestBed, inject } from '@angular/core/testing';

import { Level1Service } from './level1.service';

describe('Level1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Level1Service]
    });
  });

  it('should ...', inject([Level1Service], (service: Level1Service) => {
    expect(service).toBeTruthy();
  }));
});
