import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService
{
    public httpHeaders: HttpHeaders;
    public  sessionId:string="";
    constructor(private _httpClient: HttpClient) 
    {
         this.httpHeaders=new HttpHeaders()
         .set('allow-origin-access-control','*')
         .set('Content-type','application/json');

    }
       addBooking(newBooking,sessionId):Observable<Object>
       {
         return this._httpClient.post("http://localhost:8080/app/admin/user",JSON.stringify(newBooking),{headers:this.httpHeaders.set("auth-token",sessionId)})
       }
       registerBooking(newVehicleRoute,sessionId):Observable<Object>
       {
          return this._httpClient.put("http://localhost:8080/app/user/",JSON.stringify(newVehicleRoute),{headers:this.httpHeaders.set("auth-token",sessionId)});
       }
       
    }