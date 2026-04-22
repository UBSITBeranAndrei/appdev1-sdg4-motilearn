import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  userName = signal('Learner');
  goalCount = signal(3);

  greeting = computed(() => `Welcome, ${this.userName()}!`);
  goalMessage = computed(() => `You have ${this.goalCount()} learning goals this week.`);

  login() {
    localStorage.setItem('motilearn_user', 'true');
  }

  logout() {
    localStorage.removeItem('motilearn_user');
  }
}