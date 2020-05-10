import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { VehicleService } from '../services/vehicle.service';
//import {Pipe,PipeTransform} from '@angular/core';

@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
 providers:[VehicleService]
  })

  export class VehicleComponent 
  {
    id: number;
    add=false;
    update=false;
    del=false;
     public vehicle;
     public sessionId;
    //  displayedColumns = ["id","source","destination","distance","travelduration","actions"];
     
     constructor(public vehicleService:VehicleService)
     {
       
      vehicleService.getVehicle().subscribe((response)=>
       {
        this.vehicle=response;
        console.log('Received vehicle details:',response);
         }
       
       );
     }


     delVehicle(){
      this.del=true;
    }
     addVehicle(){
       this.add=true;
     }
     upVehicle(){
      this.update=true;
    }


     onSubmit(name:any,type:any,registrationNumber:any,seatingCapacity:any,farePerKm:any)
     {
       console.log("name",name.value)
       this.sessionId=sessionStorage.getItem("sessionId");

            this.vehicleService.addVehicle({
 
                "name":name.value,
                "type":type.value,
                 "registrationNumber":registrationNumber.value,
                 "seatingCapacity":seatingCapacity.value,
                 "farePerKm":farePerKm.value
                
              },this.sessionId).subscribe((response) => {
            console.log("response array", response)
            this.vehicle.push(response);
            console.log(this.vehicle);
            
            
       });
     
  }
  
  updateVehicle(vehicleId:any,name:any,type:any,registrationNumber:any,seatingCapacity:any,farePerKm:any) {
  let temp=[];
  this.sessionId=sessionStorage.getItem("sessionId");
  
  let vehicle = {
    
    name:name.value,
    type:type.value,
    registrationNumber:registrationNumber.value,
    seatingCapacity:seatingCapacity.value,
    farePerKm:farePerKm.value
  
  };
  
  this.id=vehicleId.value;

  console.log("vehicleId= ",typeof(vehicleId.value));
  console.log("name=",name);

    this.vehicleService.updateVehicle( this.id,vehicle,this.sessionId).subscribe(
      (response)=>{console.log("Vehicle updated",response);
    this.vehicle.forEach(element => {if(element.vehicleId!=this.id){
      temp.push(element);
    }
    else temp.push(response);},
    )
    this.vehicle=temp; 
    console.log("temp =",temp);
    console.log("response =",this.vehicle);

    });
    
      console.log(this.sessionId);
    
  
 
   
  }
  
  deleteVehicle(vehicleid:any) {

    console.log("id=",vehicleid);
    let temp=[];
    this.sessionId=sessionStorage.getItem("sessionId");
    this.vehicleService.deleteVehicle(vehicleid,this.sessionId).
    subscribe(
      (response)=>{console.log("Route deleted",response);
      this.vehicle.forEach(element => {if(element.vehicleid!=vehicleid){
        temp.push(element);
      }
      },
      )
       this.vehicle=temp; 
      console.log("temp =",temp);
      console.log("response =",this.vehicle);
      window.location.reload();

 
});}}
  


