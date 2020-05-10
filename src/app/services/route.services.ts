import { Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RouteService{

  public httpHeaders:HttpHeaders;

  constructor(private _httpClient: HttpClient){
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json');
  }
  getRouteDetails(): Observable<Object> {
    return this._httpClient.get('http://localhost:8080/app/route',{headers:this.httpHeaders});
  }
  deleteRouteDetails(id,sessionId): Observable<Object> {
    
    return this._httpClient.delete('http://localhost:8080/app/route/'+id,{headers:this.httpHeaders.set('authtoken',sessionId)});
  }
  addRouteDetails(routeObj,sessionId): Observable<Object> {
    console.log("routeobj",routeObj);
    console.log("sessionid",sessionId);
    return this._httpClient.post('http://localhost:8080/app/route',JSON.stringify(routeObj),{headers:this.httpHeaders.set('authtoken',sessionId)});

  }
  updateRouteDetails(id,routeObj,sessionId): Observable<Object> {
    return this._httpClient.put('http://localhost:8080/app/route/'+id,JSON.stringify(routeObj),{headers:this.httpHeaders.set('authtoken',sessionId)});
  }
}