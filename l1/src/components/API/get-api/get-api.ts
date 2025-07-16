import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi {

  userList:any[] = [];
  productList:any[] = [];

  constructor(private http: HttpClient) { 

  }

  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe((result:any) =>{
      this.userList = result;
    })
  }

  getProducts(){
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products")
    .subscribe((result:any) => {
      this.productList = result;
    })
  }
}
