import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter = signal(0);

  increment(): void {
    this.counter.update((c) => c + 1);
  }
  decrement(): void {
    this.counter.update((c) => c - 1);
  }
  reset(): void {
    this.counter.set(0);
  }

}
