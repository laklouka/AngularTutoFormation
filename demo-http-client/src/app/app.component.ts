import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  responseMessage:string 
  referenceRequest:any
  referenceInterval:any 
  constructor(private httpClient:HttpClient) {

  }
  ngOnDestroy(): void {
    this.referenceRequest.unsubscribe()
    clearInterval(this.referenceInterval)
  }
  ngOnInit(): void {
    this.referenceRequest = this.httpClient.get('http://localhost:3001/').subscribe((res:any) => {
      this.responseMessage = res.message
    })

    this.referenceInterval = setInterval(()=> {console.log('test')}, 1000)

  }

  sendRequest() {
    // this.httpClient.get('http://localhost:3001/').subscribe((res:any) => {
    //   this.responseMessage = res.message
    // })
    
    this.httpClient.post('http://localhost:3001/', {requestMessage : "message"}, {headers : {}}).subscribe((res:any) => {
      this.responseMessage = res.message
    })
  }
}
