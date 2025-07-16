import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-post-api',
  imports: [],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css'
})
export class PostApi {

  carList: any[] = [];

  carObj: any = {
    
  "CarId": 0,
  "Brand": "",
  "Model": "",
  "Year": "",
  "Color": "",
  "DailyRate": "",
  "CarImage": "",
  "RegNo": ""

  }

  http=inject(HttpClient);

  getAllCars(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars")
    .subscribe((result:any)=>{
      this.carList = result.data;
  })
  }
}
