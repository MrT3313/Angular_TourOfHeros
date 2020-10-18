import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { MessageService } from './message.service'

import { Hero } from '../interface/hero.interface'
import { MOCK_HEROES } from '../__mocks__/heroes.mock'

@Injectable({
  providedIn: 'root'
})

export class HeroesDataService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(MOCK_HEROES);
  }

  getHero(id): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    
    return of(MOCK_HEROES.find(hero => hero.id === id))
  }
}
