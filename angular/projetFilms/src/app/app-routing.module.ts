import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionFilmsComponent } from './gestion-films/gestion-films.component';
import { ListeFilmsComponent } from './liste-films/liste-films.component';

const routes: Routes = [
  { path: 'liste', component: ListeFilmsComponent},
  { path: 'gestion', component: GestionFilmsComponent},
  { path: 'gestion/:idFilm', component: GestionFilmsComponent},
  { path: '**', redirectTo : '/liste'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
