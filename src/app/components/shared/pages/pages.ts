import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Menu, RouterOutlet],
  standalone: true,
  selector: 'app-pages',
  templateUrl: './pages.html',
  styleUrl: './pages.css'
})
export class Pages {
}