import { Component, OnInit } from '@angular/core';
import {FilmsService} from '../films.service'


@Component({
  selector: 'films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})

export class FilmsListComponent implements OnInit {

  filmList : Object[] = []
  filmName : string; 
  constructor(private filmsService: FilmsService) { }

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
