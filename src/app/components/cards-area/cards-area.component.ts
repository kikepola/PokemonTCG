import { Pokemon, Pokedex } from './../../models/pokemon.model';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-area',
  templateUrl: './cards-area.component.html',
  styleUrls: ['./cards-area.component.css']
})
export class CardsAreaComponent implements OnInit {
  pokemons: Pokemon[] | undefined;
  filteredPokemons: Pokemon[] | undefined;
  isLoading: boolean = false;

  constructor(private service: PokemonService) { }

  ngOnInit() {
    this.isLoading = true;
    this.service.getCards().subscribe((pokedex: Pokedex) => {

      this.pokemons = pokedex.data.sort((a, b) => a.name.localeCompare(b.name))
      this.filteredPokemons = this.pokemons

      this.isLoading = false;
    }, error => {
      console.log(error);
    })
  }

  filterBy(textfild: any){
    var searchText: String = textfild.target.value;

    if(searchText.length > 0){
      this.filteredPokemons = this.pokemons?.filter(
        (pokemon:Pokemon) => {
          return pokemon.name.toUpperCase().includes(searchText.toUpperCase())
        }
      );
    }else{
      this.filteredPokemons = this.pokemons;
    }
  }

}
