import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Signal {

  //1st way to create a signal
  firstName=signal("dhaya");
  //2nd way to create a signal
  //using type annotation
  lastName=signal<string>("nithi");

  courseName:string="angular 19";
  rollNo=signal<number>(0);

  constructor(){
    setTimeout(() => {
      this.courseName="spring"
      this.firstName.set("aswini");
    }, 5000);
  }

  onIncrement(){
    this.rollNo.update((oldValue)=>oldValue+1)
  }

}
