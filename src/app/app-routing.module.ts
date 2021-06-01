import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemon/:id', component: PokemonPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
