import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css'
})
export class NgFor {

  //array of list
  cityList:String[] = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  //array of objects
  employeeList :any[] = [
    {id: 1, name: "John Doe", position: "Software Engineer"},
    {id: 2, name: "Jane Smith", position: "Project Manager"},
    {id: 3, name: "Sam Wilson", position: "UX Designer"},
    {id: 4, name: "Lisa Brown", position: "Data Analyst"},
    {id: 5, name: "Tom White", position: "DevOps Engineer"}
  ]
}
