import { Component, OnInit, Input } from '@angular/core';
import {FilmsService} from '../films.service'

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input()
  filmId: string; 
  filmItem: {} = {};
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    if(!this.filmId) {return;}
    this.filmsService.getFilmById(this.filmId).subscribe(data => {
      this.filmItem = data;
    })
  }

}