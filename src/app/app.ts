import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { EventGet } from './event-get/event-get';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Counter, EventGet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = signal('himanshu');
  
}
