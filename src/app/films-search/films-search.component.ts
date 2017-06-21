import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'films-search',
  templateUrl: './films-search.component.html',
  styleUrls: ['./films-search.component.css']
})
export class FilmsSearchComponent implements OnInit {
  search: string;
  selectedValue: string;

  constructor() {}

  @Output()  searchEv = new EventEmitter();
  @Output()  onSelected = new EventEmitter<string>();

  views = [
    {value: 'film-list', viewValue: 'List'},
    {value: 'film-card', viewValue: 'Card'}
  ];  

  change(selection) {
    console.log(selection.value);
 		this.onSelected.emit(selection.value);
    this.selectedValue = selection.value;
 }

  ngOnInit() {
  }

  searchFilm() {
     this.searchEv.emit(this.search);
}

}
