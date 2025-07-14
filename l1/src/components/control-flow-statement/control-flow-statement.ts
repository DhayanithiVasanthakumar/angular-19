import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-statement',
  imports: [FormsModule],
  templateUrl: './control-flow-statement.html',
  styleUrl: './control-flow-statement.css'
})
export class ControlFlowStatement {

  div1Visible :boolean=true;
  isChecked:boolean=false;
  dayName:string="";
  cityList:string[]=["New York","Los Angeles","salem"];

  //array of objects
  employeeList :any[] = [
    {id: 1, name: "John Doe", position: "Software Engineer"},
    {id: 2, name: "Jane Smith", position: "Project Manager"},
    {id: 3, name: "Sam Wilson", position: "UX Designer"},
    {id: 4, name: "Lisa Brown", position: "Data Analyst"},
    {id: 5, name: "Tom White", position: "DevOps Engineer"}
  ]
  hideShowDiv1(isShow:boolean){
    this.div1Visible=isShow;
  }
}
