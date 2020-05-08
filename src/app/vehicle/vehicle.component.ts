import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../services/vehicle.service';



@Component({
  selector: 'appvehicle',
  template:`<div>
  <h1>
  {{ vehicles | json }}
  </h1>
  </div>`,
   providers:[VehicleService]
  })
  export class VehicleComponent 
  {
     public vehicles;
     constructor(private vehicleService:VehicleService)
     {
       this.vehicleService.getVehicle().subscribe((response)=>
       {
        this.vehicles=response;console.log('Received vehicles:',response);
         }
       
       );
     }
  }
