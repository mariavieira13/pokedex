import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public listaPokemon = [];

  private url = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  buscarTodosPokemon() {
    return this.http.get(`${this.url}pokemon`);
  }

  buscarUmPokemon(url: string){
    return this.http.get(url);
  }
}
