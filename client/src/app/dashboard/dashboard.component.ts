import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interface/hero.interface'
import { HeroesDataService } from '../../services/heroesData.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesDataSerivice: HeroesDataService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  // METHODS
  getHeroes(): void {
    this.heroesDataSerivice.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5))
  }
}
