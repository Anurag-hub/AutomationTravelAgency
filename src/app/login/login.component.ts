import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:  [ LoginService ],
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login: Object;
  sessionId:string;



  
  constructor(public  loginService:  LoginService,public router:Router) 
  {
    
  }
  ngOnInit(): void 
  {
  }


 checkLogin(emailId:any,password:any)
 {  
    this.login={
      emailId:emailId.value,
      password:password.value
    }
    this.loginService.loginUser(this.login);
    if(this.loginService.sessionId != null){
     sessionStorage.setItem("sessionId",this.sessionId);
     this.router.navigate(['/dash'])
    }
    else{
   console.log("failed")
  }
 }
 goToDash(){
  this.router.navigate(['dash'])
 }

  signUP(){
    this.router.navigate(['registrationOption'])
  }
  goToChangePassword(){
    this.router.navigate(['checkPass'])
  }
 
}