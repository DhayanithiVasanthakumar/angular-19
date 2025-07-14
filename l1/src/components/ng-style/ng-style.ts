import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.css'
})
export class NgStyle {

  div1bgcolor:string="";
  isChecked:boolean=false;

  myCss:any={
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
  }

  addDiv1Color(color:string){
    this.div1bgcolor=color;
  }
}
