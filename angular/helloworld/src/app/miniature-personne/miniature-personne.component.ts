import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-miniature-personne',
  templateUrl: './miniature-personne.component.html',
  styleUrls: ['./miniature-personne.component.css'],
})
export class MiniaturePersonneComponent implements OnInit {

  @Input() public unePersonne!: Personne;
  @Output() public demandeSuppression = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  reagirAuClic() {
    this.demandeSuppression.emit();
  }
}
