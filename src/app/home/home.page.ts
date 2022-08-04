import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  total = 0;
  next = '';
  previous = '';
  listaPokemon = [];

  constructor(public pokemonService: PokemonService) {}

  ngOnInit() {
   this.buscarPokemon();
  }

  async buscarPokemon() {
    this.pokemonService.buscarTodosPokemon().subscribe((dados) => {
      this.total = dados['count'];
      this.next = dados['next'];
      this.previous = dados['previous'];
     // this.listaPokemon = dados['results'];
      console.log(dados);
        for(let pokemon of dados['results']){
        this.pokemonService.buscarUmPokemon(pokemon.url).subscribe((dadosPokemon) => { this.listaPokemon.push(dadosPokemon);
        });
        }
    });
  }

}
