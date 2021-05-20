import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private users = [
    {login : 'toto', password : '123456'}
  ]

  isLogged = false
  constructor() { }

  tryLogin(login, password){
    const u = this.users.find(u => u.login == login && u.password == password)
    this.isLogged = u != undefined
    console.log(this.isLogged)
  }
}
