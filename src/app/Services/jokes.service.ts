import { HttpClient } from '@angular/common/http';
import { Injectable, resolveForwardRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  // http: HttpClient;
  // constructor(http: HttpClient) {
  //   this.http = http;
  // }
  constructor(private http: HttpClient) {}
  getJokes() {
    return this.http.get(
      'https://api.chucknorris.io/jokes/random?category=dev'
    );
  }
}
