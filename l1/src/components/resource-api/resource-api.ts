import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.css'
})   
export class ResourceApi {

  // Using Angular's resource to fetch data from an API
  // This is a simple example that fetches a list of users from a public API
  userList=resource({
    loader:()=>{
      return fetch("https://jsonplaceholder.typicode.com/users")
      .then((result)=>result.json() as Promise<any[]>)
    }
  })

  reloadData(){
    this.userList.reload();
  }
}
