import { TestBed } from '@angular/core/testing';

import { HeroesDataService } from './heroesData.service';

describe('HeroesDataService', () => {
  let service: HeroesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); 
