import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Learn } from './pages/learn/learn';
import { About } from './pages/about/about';
import { ResourceList } from './pages/resource-list/resource-list';
import { ResourceDetail } from './pages/resource-detail/resource-detail';
import { NotFound } from './pages/not-found/not-found';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'learn', component: Learn, canActivate: [authGuard] },
  { path: 'about', component: About },
  { path: 'resources', component: ResourceList, canActivate: [authGuard] },
  { path: 'resources/:id', component: ResourceDetail, canActivate: [authGuard] },
  { path: 'profile', component: Profile, canActivate: [authGuard] },
  { path: '**', component: NotFound }
];