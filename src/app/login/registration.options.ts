
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './registration.options.html',
  providers:  [ LoginService ],
  styleUrls: ['./registration.options.css']
})

export class RegistrationOptionComponent implements OnInit {
  login: Object;
  sessionId:string;



  
  constructor(public  loginService:  LoginService,public router :Router) 
  
  {
    
  }
  ngOnInit(): void 
  {
  }
  goToAdminRegistration(){
    this.router.navigate(['registerAdmin'])
  }
  goToUserRegistration(){
    this.router.navigate(['registerCustomer'])
  }

}