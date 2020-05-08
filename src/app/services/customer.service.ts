import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService
{
    public httpHeaders: HttpHeaders;
    public  sessionId:string="";
    constructor(private _httpClient: HttpClient) 
    {
         this.httpHeaders=new HttpHeaders()
         .set('allow-origin-access-control','*')
         .set('Content-type','application/json');

    }
       addCustomer(newCustomer):Observable<Object>
       {
         return this._httpClient.post("http://localhost:8080/app/admin/user",JSON.stringify(newCustomer),{headers:this.httpHeaders})
       }
       updateCustomer(newCustomer,id):Observable<Object>
       {
          return this._httpClient.put("http://localhost:8080/app/user/"+id,JSON.stringify(newCustomer),{headers:this.httpHeaders});
       }
       
    }