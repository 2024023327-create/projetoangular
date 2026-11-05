import { Component } from '@angular/core';
import { Pages } from './components/shared/pages/pages';

@Component({
  imports: [Pages],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
