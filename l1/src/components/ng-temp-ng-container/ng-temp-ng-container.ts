import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-temp-ng-container.html',
  styleUrl: './ng-temp-ng-container.css'
})
export class NgTempNgContainer {

  employeeList :any[] = [
    {id: 1, name: "", position: "Software Engineer"},
    {id: 2, name: "Jane Smith", position: "Project Manager"},
    {id: 3,  position: "UX Designer"},
    {id: 4, name: "Lisa Brown", position: "Data Analyst"},
    {id: 5, name: null, position: "DevOps Engineer"}
  ];

  isLoader:boolean=true;
  
  constructor(){

  }
}
