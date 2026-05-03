import { Component, signal, OnInit, output } from '@angular/core';

const QUOTES = [
  { quote: 'The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.', author: 'Brian Herbert' },
  { quote: 'Education is the most powerful weapon which you can use to change the world.', author: 'Nelson Mandela' },
  { quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.', author: 'Mahatma Gandhi' },
  { quote: 'The beautiful thing about learning is that no one can take it away from you.', author: 'B.B. King' },
  { quote: 'An investment in knowledge pays the best interest.', author: 'Benjamin Franklin' },
  { quote: 'The more that you read, the more things you will know.', author: 'Dr. Seuss' },
  { quote: 'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.', author: 'Richard Feynman' },
  { quote: 'Push yourself, because no one else is going to do it for you.', author: 'Unknown' },
];

@Component({
  selector: 'app-motivational-popup',
  imports: [],
  templateUrl: './motivational-popup.html',
  styleUrl: './motivational-popup.css'
})
export class MotivationalPopup implements OnInit {
  closed = output<void>();

  isVisible = signal(false);
  quote = signal(QUOTES[0]);

  ngOnInit() {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    this.quote.set(QUOTES[randomIndex]);
    setTimeout(() => this.isVisible.set(true), 500);
  }

  close() {
    this.isVisible.set(false);
    setTimeout(() => this.closed.emit(), 300);
  }
}