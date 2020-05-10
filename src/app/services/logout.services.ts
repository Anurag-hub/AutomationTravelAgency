import { Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LogoutService{

    public httpHeaders:HttpHeaders;

    constructor(private _httpClient: HttpClient){
        this.httpHeaders=new HttpHeaders()  
        .set('allow-origin-access-control','*')
        .set('Content-type','application/json');
      }

      deleteUser(sessionId) : Observable<Object> {

        return this._httpClient.delete( 'http://localhost:8080/app/admin/user/logout' , {headers: this.httpHeaders.set('authtoken',sessionId)})  ;
        }


}
