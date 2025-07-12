import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

  firstName :String = "dhaya";
  rollNumber :Number = 1234;
  isActive :Boolean = true;
  currentDate :Date = new Date();
 myPlaceholder :String = "Enter your name";
divClassName :String = "bg-primary ";
selectedCity :String = "";

  constructor(){
    console.log(this.firstName);
  }

  showWelcomeMessage(){
    alert("Welcome to Angular 19");
  }

  onCityChange(){
    console.log("City changed");
  }
}
