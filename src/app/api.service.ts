import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public data = {};
  constructor(private http: HttpClient) {

  }

  initData() {
    return this.getJoke().pipe(
      map((data) => {
        return this.getJoke().subscribe(() => {});
      })
    );
  }

  getJoke() {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }
}
