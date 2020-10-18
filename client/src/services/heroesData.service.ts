import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service'

import { Hero } from '../interface/hero.interface'

@Injectable({
  providedIn: 'root'
})

export class HeroesDataService {
  private baseUrl = 'api/MOCK_HEROES';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(  
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  // METHODS
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.baseUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeros', []))
      )
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Hero>(url)
        .pipe(
          tap(_ => this.log(`fetched hero id=${id}`)),
          catchError(this.handleError<Hero>(`getHero id=${id}`))
        )
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(
      this.baseUrl,
      hero,
      this.httpOptions
    )
      .pipe(
        tap((newHero: Hero) => this.log(`Added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<any>(`updateHero id=${hero.id}`))
      )
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(
      this.baseUrl,
      hero,
      this.httpOptions
    )
      .pipe(
        tap(_ => this.log(`Updated hero id=${hero.id}`)),
        catchError(this.handleError<any>(`updateHero id=${hero.id}`))
      )
  }

  deleteHero(hero: Hero | number): Observable<any> {
    const id = typeof hero === 'number' ? hero : hero.id
    const url = `${this.baseUrl}/${id}`

    return this.http.delete<Hero>(
      url,
      this.httpOptions
    )
      .pipe(
        tap(_ => this.log(`Deleted Hero id${id}`)),
        catchError(this.handleError<any>(`deletedHero`))
      )
  }

  // HANDLERS
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)

      this.log(`${operation} failes: ${error.message}`)

      return of(result as T)
    }
  }

  // UTILS
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
