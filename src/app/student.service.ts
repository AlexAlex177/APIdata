import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private client:HttpClient) { }

 url='http://localhost:3000/users';
 getUser(){
  return this.client.get(this.url)
 }

 saveUser(data:any){
  return this.client.post(this.url,data);
 }

 deleteUser(id:number){
  return this.client.delete('http://localhost:3000/users/'+id);
 }
}
