import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

  userForm:FormGroup=new FormGroup({
    fName:new FormControl('',[Validators.required]),
    lName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    userName:new FormControl('',[Validators.email]),
    city:new FormControl(''),
    state:new FormControl('tamilnadu'),
    zip:new FormControl(''),
    isAgree:new FormControl(false)
  })

  onUserSave() {
    const formValue = this.userForm.value;
  }
}
