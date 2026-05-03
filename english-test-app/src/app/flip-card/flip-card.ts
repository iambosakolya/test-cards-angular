import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.html',
  styleUrl: './flip-card.scss',
})
export class FlipCard {
  question = input.required<string>();
  answer = input.required<string>();

  flipped = signal(false);

  toggle(): void {
    this.flipped.update((v) => !v);
  }
}
