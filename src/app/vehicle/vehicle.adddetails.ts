import { Component } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';

export class VehicleAdd {
  public vehicleId: Number;
  public name: string;
  public type: string;
  public registrationNumber: number;
  public seatingCapacity: number;
  public farePerKm: number;
}

@Component({
  selector: 'vehicleadd',
  templateUrl: './vehicle/vehicle.component.html',
  //styleUrls: ['./app.component.css']
  providers: [ /*ReservationComponent */]
})

export class VehicleComponent {
  public registration;
  model = new VehicleAdd();
  
  Type= ['Car','MiniBus'];
 SeatingCapacity= [2,3,4,8,12];
  
  public getReservationService;
  
  constructor(private getReservation: RegistrationComponent) 
  {
    
    this.getReservationService=getReservation;
    

  }
  onSubmit(name:any,type:any,registrationNumber:any,seatingCapacity:any,farePerKm:any)
  {
    
    this.getReservationService.addCandidate({
 
       "name":name.value,
      "type":type.value,
      "registrationNumber":registrationNumber.value,
        "seatingCapacity":seatingCapacity.value,
        "fareperkm":farePerKm.value
      
}
).subscribe((response)=> {
this.registration=response;
console.log("New Vehicle added : ",response);
});
  }
}