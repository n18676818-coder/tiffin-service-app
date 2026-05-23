import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-dialog-component',
  imports: [
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './menu-dialog-component.component.html',
  styleUrl: './menu-dialog-component.component.css'
})
export class MenuDialogComponentComponent {

}
