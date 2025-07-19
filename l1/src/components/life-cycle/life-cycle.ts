import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css'
})
export class LifeCycle implements OnInit,AfterViewInit ,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{
 
  constructor(){
    console.log('constructor called');
  }
 
    ngOnInit(): void {
      //for api call function
    console.log('ngOnInit method');
  }
 ngAfterContentInit(): void {
    console.log('after content init method');
  }
  ngAfterContentChecked(): void {
    console.log('after content checked method');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit method');
  }
    ngAfterViewChecked(): void {
    console.log('after view checked method');
  }
  
   ngOnDestroy(): void {
    //code for user will redirect from an component 
    alert("you are leaving page");
    console.log('on destroy method');
  }

}
