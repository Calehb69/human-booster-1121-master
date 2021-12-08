import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.css']
})
export class ListeFilmsComponent implements OnInit {

  tabFilms: Film[];

  constructor(public singletonFilm : FilmsService) {
    this.tabFilms = this.singletonFilm.tabFilms;
  }

  ngOnInit(): void {
  }

  supprimerFilm(film: Film) {
    let index = this.tabFilms.indexOf(film);
    if (index != -1) {
      this.tabFilms.splice(index, 1);
    }
  }
}
