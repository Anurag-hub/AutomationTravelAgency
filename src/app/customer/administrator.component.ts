import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../Services/customer.service';
import {Customer} from './customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './registration.admin.html',
  styleUrls: ['./registration.admin.css'],
  providers:[CustomerService]
})
export class AdministratorComponent implements OnInit {

  public newAdmin:Object;

  constructor(private customerService:CustomerService,public router:Router) 
  { 
      
  }

  ngOnInit(): void 
  {
    
  }
  setAdmin(firstname:any,lastname:any,emailId:any,password:any)
  {
    
     this.newAdmin=
     {
       firstName:firstname.value,
       lastName:lastname.value,
       emailId:emailId.value,
       password:password.value,
       userType:"A"
     }
     //console.log("Customer added"+this.newCustomer.toString())
     
    this.customerService.addCustomer(this.newAdmin).subscribe(
      (response)=>{console.log("Administrator added"+response.toString())}
      );
  }
  goToLogin(){
    this.router.navigate(['adminLogin'])
  }
}
