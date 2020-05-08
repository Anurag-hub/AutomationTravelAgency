import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../Services/dashboard.services';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit {

  personalDetails:Object;
  bookingDetails:Object;
  providers:[DashboardService,LoginService]
  constructor(public router:Router) 
  {
    
  }


  // onSumbit(dateOfJourney:any,cardNumber:any,validFrom:any,validTill:any,balance:any)
  // { 
    
  //     this.personalDetails=
  //     {
  //          reservationList:[
  //            {
  //             journeyDate:dateOfJourney
  //            }
  //          ], 
  //          creditCardList:[
  //            {
  //              creditCardNumber:cardNumber.value,
  //              validFrom:validFrom,
  //              validTo:validTill,  
  //              creditBalance:parseInt(balance)

  //            }
  //          ]
  //      }
    
  //    this.dashboardService.addBooking(this.personalDetails,this.loginService.sessionId)
  //    .subscribe((res)=>{alert("Registered Your journey")});
  // }
  // onBook(vehicleId:any,routeId:any)
  // {
  //   this.bookingDetails={
  //     vehicleId:vehicleId,
  //     routeId:routeId
  //   }
  //   this.dashboardService.registerBooking(this.bookingDetails,this.loginService.sessionId)
  //    .subscribe((res)=>{alert("Booked.. Check Booking Status")});
  // }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['logout'])
  }
}
