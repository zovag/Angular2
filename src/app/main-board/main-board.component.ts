import { Component, OnInit } from '@angular/core';
import {FilmCardComponent} from './../film-card/film-card.component';
import {FilmsListComponent} from './../films-list/films-list.component';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  constructor() { }

  links = [
        { path: '/home', icon: 'home', label: 'Главная'},
        { path: '/filmslist', icon: 'view_list', label: 'Все фильмы'},
        { path: '/profile', icon: 'perm_contact_calendar', label: 'Профиль'}
        // { path: '/statistics', icon: 'settings', label: 'Статистика'}
  ];

  ngOnInit() {
    
  }

}