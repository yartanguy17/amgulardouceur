import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  host = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getMenus() {
    return this.http.get(`${this.host}/menu`).pipe(map((res) => res));
  }
}
