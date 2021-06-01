import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsAreaComponent } from './components/cards-area/cards-area.component';
import {HttpClientModule} from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { PokemonResumeCardComponent } from './components/pokemon-resume-card/pokemon-resume-card.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { PokemonFullInfoComponent } from './components/pokemon-full-info/pokemon-full-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardsAreaComponent,
    LoadingComponent,
    PokemonResumeCardComponent,
    PokemonPageComponent,
    PokemonFullInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
