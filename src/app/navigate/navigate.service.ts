import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private http:HttpClient) { }
public registernow(r:any):Observable<any>
{ 
  console.log("ram siya ram");
  return this.http.post("http://localhost:3010/regi",r);
}
public login(r:any):Observable<any>
{
  return this.http.post("http://localhost:3010/login",r);
}
}
