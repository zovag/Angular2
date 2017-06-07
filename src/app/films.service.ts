import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class FilmsService {
  searchUrl: string = "http://www.omdbapi.com/?page=1&s=";
  apiKey: string = "&apikey=520bbe17";
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
     return this.http.get(`${this.searchUrl}${filmName}${this.apiKey}`).map(this.extractListData);
   }

  // getFilms (film: string, searchById: boolean = false) {
  //   let param: string;
  //   if (searchById) {
  //     param = 'page=1&s=';
  //   } else {
  //     param = 'i=';
  //   }
  //   let url = this.searchUrl + '?' + param + film + this.apiKey;

  //   return this.http.get(url).map((res: Response) => res.json());
  // }

  getFilmById (filmId: string) {
    return this.http.get(`${this.filmUrl}${filmId}${this.apiKey}`).map(this.extractItemData);
  }

}