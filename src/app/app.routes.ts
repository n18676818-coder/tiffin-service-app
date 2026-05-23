import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AdminMenuFormComponent } from './admin/admin-menu-form/admin-menu-form.component';

export const routes: Routes = [

  {
    path: '',
    component: HeroComponent
  },

  {
    path: 'admin',
    component: AdminMenuFormComponent
  }

];
