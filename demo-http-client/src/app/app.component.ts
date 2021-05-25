import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  responseMessage:string  
  constructor(private httpClient:HttpClient) {

  }

  sendRequest() {
    this.httpClient.get('http://localhost:3001/').subscribe((res:any) => {
      this.responseMessage = res.message
    })
  }
}
