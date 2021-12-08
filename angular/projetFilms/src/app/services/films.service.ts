import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  public tabFilms: Film[] = [];
  
  constructor() { 
    let gattaca: Film = new Film(
      "azerty1234",
      "Bienvenue à Gattaca",
      1998,
      ["SF", "Romance"],
      "Andrew Niccol",
      121,
      new URL("https://www.lecercledesrockeursdisparus.com/wp-content/uploads/2019/06/CINEMA-Gattaca.jpg")
      );
      
    let leon : Film = new Film(
      "toto4567",
      "Léon",
      1994,
      ["Action", "Drame"],
      "Luc Besson",
      136,
      new URL("https://fr.web.img6.acsta.net/videothumbnails/15/10/14/12/02/314920.jpg")
    );
  
    this.tabFilms.push(leon, gattaca);
  }
}
