import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../models/film';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-gestion-films',
  templateUrl: './gestion-films.component.html',
  styleUrls: ['./gestion-films.component.css']
})
export class GestionFilmsComponent implements OnInit {

  public nom!: string;
  public anneeSortie!: number;
  public nouveauGenre! : string;
  public realisateur!: string;
  public duree!: number;
  public image! : URL;
  public listeGenres : string[] = [];

  public modeEdition = false;
  public filmModifie: Film;

  constructor(private singletonFilms: FilmsService, private route : ActivatedRoute) {
    let idFilm = route.snapshot.paramMap.get("idFilm");

    this.filmModifie = this.singletonFilms.tabFilms.find(f => f.identifiant === idFilm)!;

    if (this.filmModifie) {
      this.nom = this.filmModifie.nom;
      this.anneeSortie = this.filmModifie.anneeSortie;
      this.listeGenres = this.filmModifie.genres;
      this.duree = this.filmModifie.duree;
      this.image = this.filmModifie.image;
      this.realisateur = this.filmModifie.realisateur;
      this.modeEdition = true;
    }
  }

  ngOnInit(): void {
  }

  validerForm(monForm: NgForm) {
    if (!this.modeEdition) {
      this.creerFilm();
    } else {
      this.modifierFilm();
    }

    this.flushGenres();
    monForm.reset();
  }

  creerFilm() {
    let nouveauFilm = new Film(this.nom + Math.random(), this.nom, this.anneeSortie, [...this.listeGenres], this.realisateur, this.duree, this.image);   
    this.singletonFilms.tabFilms.push(nouveauFilm);
  }

  modifierFilm() {
    this.filmModifie.nom = this.nom;
    this.filmModifie.realisateur = this.realisateur;
    this.filmModifie.image = this.image;
    this.filmModifie.genres = [...this.listeGenres]; //Il faut copier le tableau 
    this.filmModifie.duree = this.duree;
    this.filmModifie.anneeSortie = this.anneeSortie;
  }

  ajouterGenre() {
    this.listeGenres.push(this.nouveauGenre);
  }

  flushGenres() {
    this.listeGenres.splice(0);
  }

}
