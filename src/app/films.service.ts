import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class FilmsService {
  searchUrl: string = "http://www.omdbapi.com/?page=1&s=";
  filmUrl: string = "http://www.omdbapi.com/?i=";
  
  constructor(private http: Http) { }

  private extractListData(res: Response) {
    let body = res.json();
    return body.Search || [];
  }

  private extractItemData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getFilms (filmName: string) {
    return this.http.get(this.searchUrl + filmName +"&apikey=520bbe17").map(this.extractListData);
  }

  getFilmById (filmId: string) {
    return this.http.get(this.filmUrl + filmId + "&apikey=520bbe17").map(this.extractItemData);
  }

}
