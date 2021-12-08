import { Component } from '@angular/core';
import { Personne } from './models/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  roger: Personne;
  jean: Personne;

  tabPersonnes: Personne[] = [];

  constructor() {
    this.roger  = new Personne("Roger", "Moore", new Date("1976/01/01"));
    this.jean  = new Personne("Jean", "Dujardin", new Date("1975/01/01"));
    
    this.tabPersonnes.push(this.roger, this.jean);

    setTimeout(() => {
      this.tabPersonnes.push(new Personne("Toto", "Moore", new Date()));
    }, 5000);

    // setTimeout(() => {
    //   this.roger.dateNaissance = new Date("2005/03/05");
    // }, 7000);
  }

  supprimerPersonne(unePersonne : Personne) {
    let index = this.tabPersonnes.indexOf(unePersonne);
    if (index != -1) {
      this.tabPersonnes.splice(index, 1);
    }
  }
}
