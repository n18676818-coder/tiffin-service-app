import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { HeroComponent } from './components/hero/hero.component';

import { AdminMenuFormComponent }
from './admin/admin-menu-form/admin-menu-form.component';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [
    RouterOutlet,
    HeroComponent,
    AdminMenuFormComponent
  ],

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent
implements OnInit {

  constructor(
    private websocketService:
    WebsocketService
  ) {}

  ngOnInit(): void {

    this.websocketService.connect();
  }
}