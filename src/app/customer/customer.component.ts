import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../Services/customer.service';
import {Customer} from './customer.model';
import {Router, RouterEvent, RouterLink} from '@angular/router'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[CustomerService]
})
export class CustomerComponent implements OnInit {

  public newCustomer:Object;

  constructor(private customerService:CustomerService,public router:Router) 
  { 
      
  }

  ngOnInit(): void 
  {
    
  }
  setCustomer(firstname:any,lastname:any,dateOfBirth:any,male:any,female:any,street:any,location:any,city:any,state:any,pincode:any,mobilenumber:any,emailId:any,password:any)
  {
    let gender;
     if (male.checked==true)
       gender="Male";
    else if (female.checked==true)
      gender="Female"
     this.newCustomer=
     {
       firstName:firstname.value,
       lastName:lastname.value,
       dateOfBirth:dateOfBirth.value,
       gender:gender,
       street:street.value,
       location:location.value,
       city:city.value,
       state:state.value,
       pincode:pincode.value,
       mobileNo:mobilenumber.value,
       emailId:emailId.value,
       password:password.value,
       userType:"C"
     }
     //console.log("Customer added"+this.newCustomer.toString())
     
    this.customerService.addCustomer(this.newCustomer).subscribe(
      (response)=>{console.log("Customer added"+response.toString())}
      );
  }
  goToLogin(){
    this.router.navigate(['/login'])
  }

}
