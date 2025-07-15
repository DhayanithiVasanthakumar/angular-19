import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.html',
  styleUrl: './linked-signal.css'
})
export class LinkedSignal {

  firstName=signal<String>("dhaya");
  lastName=signal<String>("vasanthakumar");

  fullName=linkedSignal({
    source:this.firstName,
    computation:(newVal,previousVal)=>{
      const fullName=newVal+" "+this.lastName();
      return fullName;
    }
  })

 changeFirstName() {
    this.firstName.set("aswini");
  }
  
  user=signal({id:1, name:'dhaya'});

  email=linkedSignal({
    source:this.user,
    computation:user=>`${user.name+user.id}@gmail.com`,
    equal:(a:any, b:any)=>a.id !== b.id
  })

 

  changeId(){
    this.user.set({id:123,name:"dhaya"});
  }
}
