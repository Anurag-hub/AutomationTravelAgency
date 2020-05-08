import {Injectable} from '@angular/core';
import { HttpClientModule,HttpHeaders, HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable()
export class RoutelistService{

    public httpHeaders: HttpHeaders;
    public sessionId:   string="";

constructor(private _httpClient: HttpClient)
{
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json');
}
getAllRoutes(){
    
 

return this._httpClient.get('http://localhost:4001/app/route',{headers: this.httpHeaders});
}
getRoutes():Observable<Object>{
    
    
    return this._httpClient.get('http://localhost:4001/app/route',{headers: this.httpHeaders});
    }
updateRoutes(routeId):Observable<Object>{
    
    this.httpHeaders.set('auth-token',this.sessionId);
  
    
    return this._httpClient.put('http://localhost:4001/app/route', JSON.stringify(routeId), {headers: this.httpHeaders});
    }
    
addRoutes(routeId):Observable<Object>{

    this.httpHeaders.set('auth-token',this.sessionId);
return this._httpClient.post('http://localhost:4001/app/route', JSON.stringify(routeId), {headers: this.httpHeaders});
}
deleteRoutes(routeId):Observable<Object>{
    this.httpHeaders.set('auth-token',this.sessionId);
return this._httpClient.delete(`http://localhost:4001/app/route/${routeId}`, {headers: this.httpHeaders});
}}