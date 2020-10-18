import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { Hero } from '../../../interface/hero.interface'
import { HeroesDataService } from '../../../services/heroesData.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero

  constructor(
    private route: ActivatedRoute,
    private heroesDataService: HeroesDataService,
    private location: Location,    
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void { 
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroesDataService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  save(): void {
    this.heroesDataService.updateHero(this.hero)
      .subscribe(() => this.goBack())
  }

  goBack(): void {
    this.location.back()
  }
}
