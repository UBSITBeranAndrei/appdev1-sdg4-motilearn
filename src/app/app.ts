import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { MotivationalPopup } from './components/motivational-popup/motivational-popup';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MotivationalPopup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoggedIn = signal(false);
  showPopup = signal(true);

  constructor(private router: Router) {
    this.checkAuth();
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkAuth();
    });
  }

  checkAuth() {
    this.isLoggedIn.set(!!localStorage.getItem('motilearn_user'));
  }

  logout() {
    localStorage.removeItem('motilearn_user');
    this.isLoggedIn.set(false);
    this.router.navigate(['/']);
  }

  onPopupClosed() {
    this.showPopup.set(false);
  }
}