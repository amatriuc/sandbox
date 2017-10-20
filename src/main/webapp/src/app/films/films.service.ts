import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class FilmsService {

  private resourceUrl = '/films/';

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<any> {
    return this.http.get('/films/');
  }

  addFilm(film): Observable<any> {
    return this.http.post('/films/',film);
  }

  updateFilm(film): Observable<any> {
    return this.http.put('/films/',film);
  }

  deleteFilm(id: number): Observable<any> {
    return this.http.delete(`${this.resourceUrl}${id}`,{responseType: 'text'});
  }

}
