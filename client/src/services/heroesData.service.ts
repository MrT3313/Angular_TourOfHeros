import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { MessageService } from './message.service'

import { Hero } from '../interface/hero.interface'
import { MOCK_HEROES } from '../__mocks__/heroes.mock'

// Make service available to be INJECTED and define its injection PROVIDER
@Injectable({
  providedIn: 'root'
})

export class HeroesDataService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(MOCK_HEROES);
  }
}
