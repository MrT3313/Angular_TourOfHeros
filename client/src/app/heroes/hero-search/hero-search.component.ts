import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../../../interface/hero.interface';
import { HeroesDataService } from '../../../services/heroesData.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.less' ]
})
export class HeroSearchComponent implements OnInit {
  // $ denotes an Observable
  heroes$: Observable<Hero[]>;

  // Subject = source of observable values & Observable itself
  // Can PUSH Values into subject by calling .next()
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroesDataService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}