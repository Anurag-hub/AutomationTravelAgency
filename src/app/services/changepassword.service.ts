import { Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ChangePasswordService{

    public httpHeaders:HttpHeaders;

    constructor(private _httpClient: HttpClient){
        this.httpHeaders=new HttpHeaders()  
        .set('allow-origin-access-control','*')
        .set('Content-type','application/json');
      }

      changePassword(changePassword) : Observable<Object> {

        return this._httpClient.put( 'http://localhost:8080/app/userController/user/changepassword',JSON.stringify(changePassword), {headers: this.httpHeaders.set('authtoken',null)})  ;
        }


}
