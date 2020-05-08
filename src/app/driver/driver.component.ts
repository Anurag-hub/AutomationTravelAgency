import { Component } from '@angular/core';
import {DriverService} from '../services/driver.services'
export class Driver {
public driverId: String;
public name: string;
public street: string;
public location: string;
public city: string;
public state: string;
public pincode: string;
public mobileNumber: Number;
public licenseNumber: string;
}
@Component({
selector: 'register-driver',
templateUrl: './driver.component.html',
//styleUrls: ['./app.component.css']
providers: [ DriverService ]
})
export class DriverComponent {
public driver;
public sessionId:string="5017e";
constructor(public driverService:DriverService)
{

}
 onSubmit(name:any,street:any,location:any,city:any,state:any,pincode:any,mobilenumber:any,licenseNumber:any)
{
    console.log(licenseNumber)
this.driverService.addDriverDetails({
"name":name.value,
"street":street.value,
"location":location.value,
"city":city.value,
"state":state.value,
"pincode":pincode.value,
"mobileNo":mobilenumber.value,
"licenseNumber":licenseNumber.value
},this.sessionId
).subscribe((response)=> {
this.driver=response;
console.log("New Driver added : ",response);
});
}
}