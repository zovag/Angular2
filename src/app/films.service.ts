import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class FilmsService {
  searchUrl: string = "http://www.omdbapi.com/";
  apiKey: string = "520bbe17";
  
  constructor(private http: Http) { }

  private extractListData(res: Response): Array<any> {
    let body = res.json();
    return body.Search || [];
  }

  private extractItemData(res: Response): Array<any> {
    let body = res.json();
    return body || {};
  }

  getFilms(filmName: string, pageNumber: number): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('apikey', this.apiKey);
    params.set('page', String(pageNumber || 1));
    params.set('s', filmName);
    return this.http.get(this.searchUrl, {search: params}).map(this.extractListData).catch((error: any)=>{ return Observable.throw(error);});
  }

  getFilmById (filmId: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('i', filmId);
    params.set('apikey', this.apiKey);
    return this.http.get(this.searchUrl, {search: params}).map(this.extractItemData).catch((error: any)=>{ return Observable.throw(error);});
  }

}
