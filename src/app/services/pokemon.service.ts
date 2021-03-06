import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokedex, SinglePokedex } from '../models/pokemon.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private baseUrl: string = 'https://api.pokemontcg.io/v2/';

  constructor(private http:HttpClient) { }

  getCards(): Observable<Pokedex>{
    return this.http.get<Pokedex>(this.baseUrl + 'cards', { headers: new HttpHeaders().set("X-Api-Key", environment.apiKey)})
  }

  getCardById(id:string):Observable<SinglePokedex>{
    return this.http.get<SinglePokedex>(this.baseUrl + 'cards/' +  id, { headers: new HttpHeaders().set("X-Api-Key", environment.apiKey)})
  }

}
