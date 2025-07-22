import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule,NaPipe],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css'
})
export class NgFor {

  //pipes
  courseName:string="Angular";


  studentObj:any={
    name:"dhaya",
    city:"namakkal",
    mobile:"1122334455"
  }

  currentDate: Date=new Date;

  //array of list
  cityList:String[] = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  //array of objects
  employeeList :any[] = [
    {id: 1, name: "", position: "Software Engineer"},
    {id: 2, name: "Jane Smith", position: "Project Manager"},
    {id: 3,  position: "UX Designer"},
    {id: 4, name: "Lisa Brown", position: "Data Analyst"},
    {id: 5, name: null, position: "DevOps Engineer"}
  ]
}
