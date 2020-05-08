import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './admin.login.component.html',
  providers:  [ LoginService ],
  styleUrls: ['./admin.login.component.css']
})

export class AdminLoginComponent implements OnInit {
  login: Object;
  sessionId:string = this.loginService.sessionId;



  
  constructor(public  loginService:  LoginService,public router:Router) 
  {
    
  }
  ngOnInit(): void 
  {
  }
  loginOk(emailId:any,password:any)
  {  
     this.login={
       emailId:emailId.value,
       password:password.value
     }
     
     this.loginService.loginUser(this.login);
     if(this.loginService.sessionId != null){
     console.log("sessionId: ",this.loginService.sessionId)
     sessionStorage.setItem("sessionId",this.sessionId);
    this.router.navigate(['/adminOptions'])
    }
     else{
      
     }  
  }
    
  }
