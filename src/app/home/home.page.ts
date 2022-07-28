import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.buscarTodosPokemon().subscribe((dados) => {
      console.log(dados);
    });
  }

}
