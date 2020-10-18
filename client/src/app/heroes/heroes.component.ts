import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interface/hero.interface'
import { HeroesDataService } from '../../services/heroesData.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  
  constructor(private heroesDataService: HeroesDataService,) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroesDataService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  addHero(name: string): void {
    name = name.trim()
    if (!name) { return }
    this.heroesDataService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero)
      })
  }
}
