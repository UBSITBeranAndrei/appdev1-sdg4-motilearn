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
  goalCount = signal(4);

  greeting = computed(() => `Welcome back, ${this.userName()}!`);
  goalMessage = computed(() => `You have ${this.goalCount()} learning goals this week.`);
}