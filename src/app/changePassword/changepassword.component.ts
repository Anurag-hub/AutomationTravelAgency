import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from '../services/changepassword.service'
import { Observable } from 'rxjs';
import {Result}from './changepassword.model';

@Component({
  selector: 'app-changePassword',
  templateUrl: './changepassword.component.html',
  providers:  [ ChangePasswordService ],
  styleUrls: ['./changepassword.component.css']
})

export class ChangePasswordComponent implements OnInit {
  changePassword: Object;



  
  constructor(public  changePass:  ChangePasswordService) 
  
  {
    
  }
  ngOnInit(): void 
  {
  }


 checkPassword(oldPassword:any,newPassword:any)
 {  
    this.changePassword={
      oldPassword:oldPassword.value,
      password:newPassword.value
    }
    this.changePass.changePassword(this.changePassword).subscribe(
      (res:Result)=>{
       
      }
    );
    
 }

  
 
}