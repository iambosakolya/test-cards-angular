import { Component } from '@angular/core';
import { FlipCard } from './flip-card/flip-card';
import { QUESTIONS } from './data/questions';

@Component({
  selector: 'app-root',
  imports: [FlipCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly questions = QUESTIONS;
}
