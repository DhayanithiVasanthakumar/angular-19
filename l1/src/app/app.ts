import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataBinding } from '../components/data-binding/data-binding';
import { Admin } from '../components/admin/admin';
import { NgIf } from "../components/ng-if/ng-if";
import { NgFor } from '../components/ng-for/ng-for';
import { NgClass } from '../components/ng-class/ng-class';
import { NgStyle } from "../components/ng-style/ng-style";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('l1');
}
