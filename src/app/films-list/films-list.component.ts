import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {FilmsService} from '../films.service'


@Component({
  selector: 'films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})

export class FilmsListComponent implements OnInit {

  filmList : any[] = []
  filmName : string; 
  pageNumber: number;
  filmView : string = 'film-list';

  constructor(private filmsService: FilmsService) { }


  changeView(selectedValue) {
    this.filmView = selectedValue;
    console.log(selectedValue);
  }
  
  ngOnInit() {
    this.filmName = "Lord";
    this.pageNumber = 1;
    this.getFilms(this.filmName);
  }

  private getFilms(filmName: string): void {
    if(filmName) {
      this.filmsService.getFilms(filmName, this.pageNumber)
        .subscribe(
          (films: any[]) => {
            if (films && films.length) {
              this.filmList = this.filmList.concat(films);
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

  private searchFilm(film: string) {
    if (this.filmName === film) {
      this.getFilms(this.filmName);  
    } else {
      this.filmName = film;
      this.pageNumber = 1;
      this.filmList = [];
      this.getFilms(this.filmName);
    }
    
  }

 addMore(): void {
    this.pageNumber = this.pageNumber + 1;
    this.searchFilm(this.filmName);
  }
  

  
}