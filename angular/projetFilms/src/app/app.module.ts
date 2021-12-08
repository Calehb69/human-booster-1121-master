import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeFilmsComponent } from './liste-films/liste-films.component';
import { FilmComponent } from './film/film.component';
import { FormsModule } from '@angular/forms';
import { GestionFilmsComponent } from './gestion-films/gestion-films.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeFilmsComponent,
    GestionFilmsComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
