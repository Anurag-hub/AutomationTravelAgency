import { Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DriverService{

  public httpHeaders:HttpHeaders;

  constructor(private _httpClient: HttpClient){
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json');
  }

  deleteDriverDetails(sessionId): Observable<Object> {
    return this._httpClient.delete('http://localhost:8080/app/driver/',{headers:this.httpHeaders.set('authtoken',sessionId)});
  }
  addDriverDetails(driverObj,sessionId:string): Observable<Object> {
    return this._httpClient.post('http://localhost:8080/app/driver',JSON.stringify(driverObj),{headers:this.httpHeaders.set('authtoken',sessionId)});
  }
  updateDriverDetails(driverObj,sessionId): Observable<Object> {
    return this._httpClient.put('http://localhost:8080/app/driver/',JSON.stringify(driverObj),{headers:this.httpHeaders.set('authtoken',sessionId)});
  }
}