import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from '../components/data-binding/data-binding';
import { Admin } from '../components/admin/admin';
import { NgIf } from "../components/ng-if/ng-if";
import { NgFor } from '../components/ng-for/ng-for';

@Component({
  selector: 'app-root',
  imports: [ NgIf,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('l1');
}
