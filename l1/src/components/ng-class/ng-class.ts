import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-class.html',
  styleUrl: './ng-class.css'
})
export class NgClass {

  divBgColor:string="bg-success";
  isChecked:boolean=false;
  div3ClassName:string='';

  addDiv1Color(className:string){
    this.divBgColor=className;
  }
}
