import { Injectable } from '@angular/core';

import { Hero } from '../interface/hero.interface'
import { MOCK_HEROES } from '../__mocks__/heroes.mock'

// Make service available to be INJECTED and define its injection PROVIDER
@Injectable({
  providedIn: 'root'
})

export class HeroesDataService {

  constructor() { }

  getHeros(): Hero[] {
    return MOCK_HEROES
  }
}
