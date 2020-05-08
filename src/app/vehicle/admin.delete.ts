import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service'
import { Observable } from 'rxjs';
import { Vehicle } from './admin.model';
import { LoginService } from '../services/login.service'


@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin.delete.html',
  providers:  [ AdminService , LoginService ],
  styleUrls: ['./admin.delete.css']
})
export class AdminDelete  {


  vehiclelist : Observable <Object>;
  vehicleid : number;

  public vehicles = [];


  
  constructor(public adminService: AdminService , public  loginService:  LoginService ) 
  
  {
    
  }

   
  getData() {
    
    this.adminService.getVehicle(this.vehicleid).subscribe((response) => {
      console.log("response array", response)
      let key;
      for(key in response){
        this.vehicles.push(response[key]);
      }

      console.log("vehicle",this.vehicles)

    }



    );
    
  
}



  deleteVehicle() {


    this.adminService.deleteVehicleDetails(this.vehicleid,this.loginService.sessionId).
    subscribe(
      (response)=>{console.log("Vehicle deleted",response)}
      );

 
  }

}




  
