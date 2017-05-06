import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  links = [
        { path: '/dashboard', icon: 'home', label: 'Главная'},
        { path: '/films', icon: 'event_name', label: 'Фильмы'},
        // { path: '/statistics', icon: 'settings', label: 'Статистика'}
  ];

}
