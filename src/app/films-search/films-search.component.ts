import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'films-search',
  templateUrl: './films-search.component.html',
  styleUrls: ['./films-search.component.css']
})
export class FilmsSearchComponent implements OnInit {
  filmName: string = '';

  constructor() {}

  @Output() 
  getNewFilms: EventEmitter<string> = new EventEmitter();

  views = [
    {value: 'film-list', viewValue: 'List'},
    {value: 'film-card', viewValue: 'Card'}
  ];  

  ngOnInit() {
  }

  getFilms() {
    this.getNewFilms.emit(this.filmName); 
  }

}
