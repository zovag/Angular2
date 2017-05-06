import { Component, OnInit } from '@angular/core';
import {FilmCardComponent} from './../film-card/film-card.component';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  constructor() { }

  links = [
        { path: '/home', icon: 'home', label: 'Главная'},
        { path: '/films', icon: 'event_name', label: 'Фильмы'}
        // { path: '/list', icon: 'list', label: 'Ссылки'},
        // { path: '/statistics', icon: 'settings', label: 'Статистика'}
  ];

  ngOnInit() {
    
  }

}
