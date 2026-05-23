import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { MenuService } from '../../services/menu.service';
import { WebsocketService } from '../../websocket.service';
import { LocationCheckerComponent } from '../location-checker/location-checker.component';

@Component({
  selector: 'app-hero',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    LocationCheckerComponent
  ],

  templateUrl: './hero.component.html',

  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(public menuService: MenuService,private websocketService: WebsocketService) {}

  showMenu = false;

 ngOnInit(): void {

  // Initial load
  this.menuService.getMenus();

  // Connect websocket
  this.websocketService.connect();

  // Listen for live updates
  this.websocketService
    .menuUpdates
    .subscribe(() => {

      console.log(
        'Reloading menus...'
      );

      this.menuService.getMenus();
    });
}

  openMenu() {

    this.showMenu = !this.showMenu;
  }
}