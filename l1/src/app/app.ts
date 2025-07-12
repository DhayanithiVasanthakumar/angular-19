import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from '../components/data-binding/data-binding';
import { Admin } from '../components/admin/admin';

@Component({
  selector: 'app-root',
  imports: [ DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('l1');
}
