import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'films-search',
  templateUrl: './films-search.component.html',
  styleUrls: ['./films-search.component.css']
})
export class FilmsSearchComponent implements OnInit {
  filmName: string = 'Lord';
  selectedValue: string;

  constructor() {}

  @Output() 
  getNewFilms = new EventEmitter<string>();
  onSelected = new EventEmitter<string>();

  views = [
    {value: 'film-list', viewValue: 'List'},
    {value: 'film-card', viewValue: 'Card'}
  ];  

  change(selection) {
    console.log(selection.value);
 		this.onSelected.emit(selection.value);
 }

  ngOnInit() {
  }

  onGetNewFilms(filmName) {
    this.getNewFilms.emit(this.filmName); 
  }

}
