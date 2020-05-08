
import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class VehicleService{

  public httpHeaders:HttpHeaders;
  public sessionId:string="";
        

constructor(private _httpClient:HttpClient)
{
this.httpHeaders=new HttpHeaders()
.set('allow-origin-access-control','*')
.set('Content-type','application/json');
}
 getVehicle():Observable<Object>
 {
   
    return this._httpClient.get('http://localhost:8080/app/vehicle',{headers:this.httpHeaders});
 }
 addVehicle(vehicleObj,sessionId): Observable<Object>
  {
    return this._httpClient.post('http://localhost:8080/app/vehicle',JSON.stringify(vehicleObj),{headers:this.httpHeaders.set('authtoken',sessionId)});
  }
  updateVehicle(routeObj,sessionId,id): Observable<Object> 
  {
    return this._httpClient.put('http://localhost:8080/app/vehicle/ '+id,JSON.stringify(routeObj),{headers:this.httpHeaders.set('authtoken',sessionId)});
  }
 deleteVehicle(sessionId):Observable<Object>
 {
    return this._httpClient.post('http://localhost:8080/app/vehicle',{headers:this.httpHeaders.set('authtoken',sessionId)});
 }
}