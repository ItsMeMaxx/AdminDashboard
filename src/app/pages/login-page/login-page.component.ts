import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/authService";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  passwordInputType: string = 'password';
  hidePassword: boolean = true;

  email:string = '';
  password: string = '';

  errorLogin:boolean = false;
  emptyInput:boolean = false;
  wrongCombination:boolean = false;

  constructor(private readonly router: Router, private readonly auth: AuthService) { }

  ngOnInit(): void {
  }

  togglePassword(): void {
    this.hidePassword = !this.hidePassword
    this.passwordInputType = this.passwordInputType === 'text' ? 'password' : 'text'
  }

  login() {
    if(!(this.email && this.password)){
      this.emptyInput = true
      return
    }
    if(this.email !== 'admin@admin.de'){
      this.wrongCombination = true
      return;
    }
    this.auth.login(this.email, this.password).catch((error)=>{
      console.log(error)
      this.wrongCombination = true
    })
  }
}
