import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {}

  getPokemonsData() {
    return this.getPokemonsUrl().pipe(
      switchMap((urls) => {
        const observables = urls.map((url: string) => this.getPokemonFromUrl(url));
        return forkJoin(observables)
      })
    )
  }

  getPokemonsUrl() {
    return this.httpClient.get<any>("https://pokeapi.co/api/v2/pokemon?limit=100  &offset=0").pipe(
      map((data) => data.results.map((result: any) => result.url))
    )
  }

  getPokemonFromUrl(url: string) {
    return this.httpClient.get<any>(url)
  }
}
