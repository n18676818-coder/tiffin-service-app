import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MenuService }
from '../../services/menu.service';

@Component({
  selector: 'app-location-checker',

  standalone: true,

  imports: [CommonModule],

  templateUrl:
  './location-checker.component.html',

  styleUrls:
  ['./location-checker.component.css']
})
export class LocationCheckerComponent
implements OnInit {

  userLat!: number;
  userLng!: number;

  deliveryMessage = '';

  constructor(
    private menuService: MenuService
  ) {}

  ngOnInit(): void {

    navigator.geolocation
    .getCurrentPosition(

      (position) => {

        this.userLat =
          position.coords.latitude;

        this.userLng =
          position.coords.longitude;

        this.checkDelivery();
      }
    );
  }

  checkDelivery() {

    this.menuService
      .checkDelivery(
        this.userLat,
        this.userLng
      )

      .subscribe(response => {

        this.deliveryMessage =
          response;
      });
  }
}