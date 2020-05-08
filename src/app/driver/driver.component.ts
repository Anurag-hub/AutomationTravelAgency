import { Component, OnInit } from '@angular/core';
import { DriverService } from '../services/driver.services';
//import {Pipe,PipeTransform} from '@angular/core';

@Component({
  selector: 'appdriver',
  templateUrl: './driver.component.html',
 providers:[DriverService]
  })

  export class DriverComponent 
  {
    id: number;
    add=false;
    update=false;
     public driver;
     public sessionId;
    
     
     constructor(public driverService:DriverService)
     {
      
     }
     addDriver(){
       this.add=true;
     }
     upDriver(){
      this.update=true;
    }
     onSubmit(name:any,street:any,location:any,city:any,state:any,pincode:any,mobile:any,license:any)
     {
       this.sessionId=sessionStorage.getItem("sessionId");
       this.sessionId="5017e";
       
            this.driverService.addDriverDetails({
                "name":name.value,
                "street":street.value,
                "location":location.value,
                 "city":city.value,
                 "state":state.value,
                 "pincode":pincode.value,
                 "mobile":mobile.value,
                  "license":license.value,
                 
                
              },this.sessionId).subscribe((response) => {
            console.log("response array", response)
            this.driver.push(response);
            console.log(this.driver);
            
            
       });
     
  }
  
updateDriver(id:any,name:any,street:any,location:any,city:any,state:any,pincode:any,mobile:any,license:any) {
  this.sessionId=sessionStorage.getItem("sessionId");
  this.sessionId="5017e";
  let driver = {
    "id":id.value,
    "name":name.value,
    "street":street.value,
    "location":location.value,
     "city":city.value,
     "state":state.value,
     "pincode":pincode.value,
     "mobile":mobile.value,
      "license":license.value,
  
  }

this.id=id.value;


    this.driverService.updateDriverDetails(driver,this.sessionId,this.id).subscribe(
      (response)=>{console.log("Driver updated"+response.toString())}
      );
    
  
 
   
  }
  deleteDriver(driverId:number) {
    this.sessionId=sessionStorage.getItem("sessionId");


    this.driverService.deleteDriverDetails(this.sessionId,this.id).
    subscribe(
      (response)=>{console.log("Driver deleted")}
      );

 
  }

 
}


