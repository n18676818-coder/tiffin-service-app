import { Injectable, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {}

  // Signal
  menus = signal<any[]>([]);

  // BACKEND URL
  apiUrl = 'http://localhost:8080/menus';

  // SAVE MENU TO BACKEND
  addMenu(menu: any) {

    this.http.post(this.apiUrl, menu)
      .subscribe(response => {

        console.log('Saved:', response);

        this.getMenus();
      });
  }

  // FETCH MENUS FROM BACKEND
  getMenus() {

    this.http.get<any[]>(this.apiUrl)
      .subscribe(data => {

        this.menus.set(data);

        console.log(data);
      });
  }

  checkDelivery(
  latitude: number,
  longitude: number
) {

  return this.http.post(

    'http://localhost:8080/geo/check',

    {
      latitude,
      longitude
    },

    {
      responseType: 'text'
    }
  );
}
}