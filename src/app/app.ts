import { Component } from '@angular/core';
<<<<<<< HEAD
import { Page } from './components/shared/pages/page';

@Component({
  imports: [Page],
=======
import { Pages } from './components/shared/pages/pages';

@Component({
  imports: [Pages],
>>>>>>> 9caedc293f5c0aa686b27869f75b77a73bd2b145
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
