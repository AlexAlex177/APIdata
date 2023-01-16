import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 constructor(private http:HttpClient){}

 url='https://jsonplaceholder.typicode.com/users'
 getUser(){
  return this.http.get(this.url);
 }

}
