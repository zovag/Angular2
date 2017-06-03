import { Component, OnInit, Input } from '@angular/core';
import {FilmsService} from '../films.service'

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() filmId: string; 
  filmItem: {Poster: string,
              Title: string,
              Year: string,
              BoxOffice?: string,
              Actors: string,
              Awards: string,
              Plot: string};
  
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    if(!this.filmId) {return;}
    this.filmsService.getFilms(this.filmId, true).subscribe(response => {
      if (response && response.body) {
        this.filmItem = response.body;
      }
    })
  }

}