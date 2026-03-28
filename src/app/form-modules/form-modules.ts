import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-modules',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-modules.html',
  styleUrl: './form-modules.css',
})
export class FormModules {
  name = '';

}
