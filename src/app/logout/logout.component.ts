import { Component, OnInit,Input } from '@angular/core';
import {LogoutService} from '../Services/logout.services';
import {LoginComponent} from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers:[LogoutService]
})
export class LogoutComponent implements OnInit 
{
  sessionId :string;
  
   constructor(public logoutService :LogoutService,private loginService : LoginService) 
  { 
     
  }

  ngOnInit(): void 
  {
    this.logoutService.deleteUser(this.loginService.sessionId).subscribe((response)=>{
      alert(response);
    });
  }

}
