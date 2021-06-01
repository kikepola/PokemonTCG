import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-resume-card',
  templateUrl: './pokemon-resume-card.component.html',
  styleUrls: ['./pokemon-resume-card.component.css']
})
export class PokemonResumeCardComponent implements OnInit {

  @Input()pokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
