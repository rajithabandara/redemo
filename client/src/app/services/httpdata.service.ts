import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class HttpdataService {
  constructor(private http: HttpClient) {}

  getRandomInt() {
    return this.http.get<any>('http://localhost:5000/randomint');
  }

  getServerTime() {
    return this.http.get<any>('http://localhost:5000/timeinseconds');
  }
}
