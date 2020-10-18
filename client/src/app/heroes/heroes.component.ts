import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.interface'
import { MOCK_HEROES } from '../../__mocks__/heroes.mock'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})

export class HeroesComponent implements OnInit {
  heroes = MOCK_HEROES;
  selectedHero: Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
