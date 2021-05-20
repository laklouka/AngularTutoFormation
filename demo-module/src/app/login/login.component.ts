import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:string
  password:string
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  loginClick() {
    this.loginService.tryLogin(this.login, this.password)
    if(this.loginService.isLogged){
        this.router.navigate(['/'])
    }
    else 
    {
      alert("erreur login")
    }
  }

}
