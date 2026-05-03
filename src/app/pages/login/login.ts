import { Component, signal, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  username = signal('');
  password = signal('');
  errorMessage = signal('');
  alreadyLoggedIn = signal(false);

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('motilearn_user')) {
      this.alreadyLoggedIn.set(true);
    }
  }

  onUsernameChange(value: string) { this.username.set(value); }
  onPasswordChange(value: string) { this.password.set(value); }

  login() {
    if (this.username() === 'admin' && this.password() === 'admin123') {
      localStorage.setItem('motilearn_user', this.username());
      this.router.navigate(['/resources']);
    } else {
      this.errorMessage.set('Invalid username or password. Try admin / admin123');
    }
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToResources() {
    this.router.navigate(['/resources']);
  }
}