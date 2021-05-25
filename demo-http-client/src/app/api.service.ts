import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  baseUrl:string = "http://localhost:3001/"
  constructor(private httpClient:HttpClient) { }

  get(url) {
    return this.httpClient.get(this.baseUrl+url)
  }

  post(url, data) {
    return this.httpClient.post(this.baseUrl + url,data)
  }
}
