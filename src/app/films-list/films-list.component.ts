import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {FilmsService} from '../films.service'


@Component({
  selector: 'films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})

export class FilmsListComponent implements OnInit {

  filmList : Object[] = []
  filmName : string; 
  filmView : string = 'film-list';
  constructor(private filmsService: FilmsService) { }

  getNewFilms(filmName) {
     this.filmName = filmName;
     this.getFilms();
  }

  changeView(selectedValue) {
    this.filmView = selectedValue;
    console.log(selectedValue);
  }
  
  ngOnInit() {
    this.filmName = "Lord"
    this.getFilms();
  }

  private getFilms(){
    if(!this.filmName) {return;}
    this.filmsService.getFilms(this.filmName).subscribe(list => {
       this.filmList = list;
    })
  }

  

  
}