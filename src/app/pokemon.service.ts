import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  public getPokemons(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => response['results']),
      mergeMap((pokemons) => {
        const requests = pokemons.map((pokemon: any) => {
          return this.http.get(pokemon.url);
        });

        return forkJoin(requests);
      })
    );
  }

  public getPokemonByIdentifier(identifier: any): Observable<any> {
    return this.http.get(this.apiUrl + `/${identifier}`)
  }
}
