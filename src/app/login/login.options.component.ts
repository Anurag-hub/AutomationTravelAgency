
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Observable } from 'rxjs';
import {Result}from './result.model';

@Component({
  selector: 'app-login-options',
  templateUrl: './login.options.html',
  providers:  [ LoginService ],
  styleUrls: ['./login.options.css']
})

export class LoginOptionComponent implements OnInit {
  login: Object;
  sessionId:string;



  
  constructor(public  loginService:  LoginService) 
  
  {
    
  }
  ngOnInit(): void 
  {
  }

}