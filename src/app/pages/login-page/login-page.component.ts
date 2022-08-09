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

  userName:string = '';
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
    if(!(this.userName && this.password)){
      this.emptyInput = true
      return
    }
    if(!this.auth.login(this.userName, this.password)){
      this.wrongCombination = !this.wrongCombination
      return
    }

    this.router.navigateByUrl('/home')
  }
}
