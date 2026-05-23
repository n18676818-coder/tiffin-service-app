import { Component } from '@angular/core';

import { MenuService } from '../../services/menu.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-menu-form',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './admin-menu-form.component.html',

  styleUrls: ['./admin-menu-form.component.css']
})
export class AdminMenuFormComponent {

  constructor(private menuService: MenuService) {}

  mealType = '';
  items = '';
  price = 0;

  saveMenu() {

    const newMenu = {
      type: this.mealType,
      items: this.items.split(','),
      price: this.price
    };

    this.menuService.addMenu(newMenu);

    console.log(this.menuService.menus());

    // Clear form
    this.mealType = '';
    this.items = '';
    this.price = 0;

    alert('Menu Added Successfully');
  }

}