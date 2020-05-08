import { Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AdminService{

  public httpHeaders:HttpHeaders;
  public sessionId: string;

 

  constructor(private _httpClient: HttpClient){
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json');
  }


getVehicle(vehicleid:number) : Observable<Object> {

return this._httpClient.get( 'http://localhost:8080/app/vehicle/'+vehicleid , {headers: this.httpHeaders});
}


addVehicleDetails(vehicleObj:Object , sessionId:string): Observable<Object> {
    return this._httpClient.post('http://localhost:8080/app/vehicle',JSON.stringify(vehicleObj),{headers:this.httpHeaders.set('authtoken',this.sessionId)});
  }

  updateVehicleDetails(vehicleid:number , vehicleObj:Object , sessionId:string): Observable<Object> {
    return this._httpClient.put('http://localhost:8080/app/vehicle/'+vehicleid,JSON.stringify(vehicleObj),{headers:this.httpHeaders.set('authtoken',this.sessionId)});
  }


deleteVehicleDetails(vehicleid:number , sessionId:string): Observable<Object> {
    return this._httpClient.delete( 'http://localhost:8080/app/vehicle/'+vehicleid ,{headers:this.httpHeaders.set('authtoken',this.sessionId)});
  } 

  addDriverDetails(driverObj,sessionId:string): Observable<Object> {
    return this._httpClient.post('http://localhost:8080/app/driver',JSON.stringify(driverObj),{headers:this.httpHeaders.set('authtoken',sessionId)});
  }
  
  deleteDriverDetails(driverid:Number): Observable<Object> {
    return this._httpClient.delete('http://localhost:8080/app/driver/',{headers:this.httpHeaders});
  }
 
  updateDriverDetails(driverObj,sessionId): Observable<Object> {
    return this._httpClient.put('http://localhost:8080/app/driver/',JSON.stringify(driverObj),{headers:this.httpHeaders.set('authtoken',sessionId)});
  }

}
