import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../../interface/hero.interface'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})

export class HeroDetailComponent implements OnInit {
  // heroes.component.html is using property binding (one way)to select and pass 'hero' into <app-hero-detail> (the selector of this @Component)
  @Input() hero: Hero

  constructor() { }

  ngOnInit(): void {
  }

}
