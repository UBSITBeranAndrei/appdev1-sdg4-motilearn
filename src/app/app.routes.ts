import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Learn } from './pages/learn/learn';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'learn', component: Learn },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' }
];