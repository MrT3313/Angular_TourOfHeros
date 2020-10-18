import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interface/hero.interface'
import { HeroesDataService } from '../../services/heroesData.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})

export class HeroesComponent implements OnInit {
  // PROPERTIES
  heroes: Hero[];
  selectedHero: Hero;
  
  // **notes** 
  // Must ASK for the service that was made available through the @Injectable() to be INJECTED
  constructor(private heroesDataService: HeroesDataService) { }

  // INITIALIZATION
  ngOnInit(): void {
    this.getHeroes()
  }

  // METHODS
  getHeroes(): void {
    this.heroes = this.heroesDataService.getHeros()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
