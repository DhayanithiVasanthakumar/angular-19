import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http :HttpClient){

  }
  loadCustomer(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers")
  }
}
