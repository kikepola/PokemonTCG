import { Pokemon } from 'src/app/models/pokemon.model';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-full-info',
  templateUrl: './pokemon-full-info.component.html',
  styleUrls: ['./pokemon-full-info.component.css']
})
export class PokemonFullInfoComponent implements OnInit {
  pokemon: Pokemon | undefined;
  isLoading: boolean = false;
  @Input() id!: string | undefined;

  constructor(private service: PokemonService) { }

  ngOnInit() {
    this.isLoading = true;
    let idChecked : string = ((this.id === undefined) ? '' : this.id.toString());

    this.service.getCardById(idChecked).subscribe((pokemon: Pokemon) => {

      console.log(pokemon)

      this.pokemon = pokemon;
      this.isLoading = false;
    }, error => {
      console.log(error);
    })
  }

}
