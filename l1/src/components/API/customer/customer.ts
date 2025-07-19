import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer-service';

@Component({
  selector: 'app-customer',
  imports: [FormsModule ],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {

  customerObj:any={
    
  "customerId": 0,
  "customerName": "",
  "customerCity": "",
  "mobileNo": "",
  "email": ""

  }
customerArray:any []=[];

constructor(private customerService:CustomerService){
  this.getCustomer();
}

  // getCustomer(){
  //   this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers")
  //   .subscribe((result:any)=>{
  //     this.customerArray=result.data;
  //   })
  // }
  getCustomer(){
    this.customerService.loadCustomer().subscribe((result:any)=>{
      this.customerArray=result.data
    });
  }
}
