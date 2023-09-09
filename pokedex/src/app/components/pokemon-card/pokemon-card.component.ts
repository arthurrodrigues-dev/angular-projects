import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  pokemons!: any;

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemonsData();
  }
    
  constructor(private pokemonService: PokemonService){}

}

