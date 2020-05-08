import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers:  [ AdminService ],
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  vehiclelist : Observable <Object>;
  vehicleid : number;
  public vehicles = [];
  
  constructor(public adminService: AdminService) 
  
  {
   
  }

  ngOnInit(): void
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
    
  
}}


