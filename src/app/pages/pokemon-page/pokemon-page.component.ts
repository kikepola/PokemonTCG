import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  id: string | undefined;

  constructor(private _Activatedroute:ActivatedRoute) {
    this.id = this._Activatedroute.snapshot.paramMap.get("id")?.toString();
  }

  ngOnInit(): void {
  }

}
