import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Menu, RouterOutlet],
  standalone: true,
  selector: 'app-page',
  templateUrl: './page.html',
  styleUrl: './page.css'
})
export class Page {
}