import { Routes } from '@angular/router';

import {Dashboard} from './dashboard/dashboard';
import {Students} from './students/students';
import {Courses} from './courses/courses';


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'students', component: Students },
  { path: 'courses', component: Courses }
];

