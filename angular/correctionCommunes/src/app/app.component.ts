import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


type Commune = {
  nom : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nomCommune! : string;

  private clientHttp: HttpClient;

  public tabCommunes!: Commune[];
  private readonly URL_COMMUNES = "https://geo.api.gouv.fr/communes";
  
  constructor(clientHttp: HttpClient) {
    this.clientHttp = clientHttp;
  }

  lancerRecherche() {
    this.clientHttp.get(this.URL_COMMUNES + "?nom=" + this.nomCommune).toPromise().then(
      (data) => {
        this.tabCommunes = data as Commune[];
      }
    )
  }
}
