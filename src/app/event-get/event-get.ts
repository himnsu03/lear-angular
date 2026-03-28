import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-event-get',
  imports: [],
  templateUrl: './event-get.html',
  styleUrl: './event-get.css',
})
export class EventGet {
  value = signal('');

  getValue(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

}
