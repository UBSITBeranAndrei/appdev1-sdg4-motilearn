import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Learn } from './pages/learn/learn';
import { About } from './pages/about/about';
import { ResourceList } from './pages/resource-list/resource-list';
import { ResourceDetail } from './pages/resource-detail/resource-detail';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'learn', component: Learn },
  { path: 'about', component: About },
  { path: 'resources', component: ResourceList, canActivate: [authGuard] },
  { path: 'resources/:id', component: ResourceDetail, canActivate: [authGuard] },
  { path: '**', component: NotFound }
];