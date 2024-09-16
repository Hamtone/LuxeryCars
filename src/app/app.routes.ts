import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'models', component: CarListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'contact', component: ContactFormComponent },
];
