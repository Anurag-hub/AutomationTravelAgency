import { Component, OnInit,Input } from '@angular/core';
import {LogoutService} from '../Services/logout.services';
import {LoginComponent} from '../login/login.component';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers:[LogoutService]
})
export class LogoutComponent implements OnInit 
{
  sessionId :string;
  
   constructor(public logoutService :LogoutService,public router:Router) 
  { 
    this.sessionId=sessionStorage.getItem("sessionId");

  }

  ngOnInit(): void 
  {
    
    this.logoutService.deleteUser(this.sessionId).subscribe((response)=>{
      console.log("response",response)
    });
    this.router.navigate(["/"]);
  }

}
