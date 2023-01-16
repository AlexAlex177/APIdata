
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-getcall',
  templateUrl: './getcall.component.html',
  styleUrls: ['./getcall.component.scss']
})
export class GetcallComponent implements OnInit{

  public myusers:any;

  constructor(public employee:EmployeeService){}

  ngOnInit(): void {
    this.employee.getUser().subscribe(data=>{
      this.myusers=data;
    })
  }
}
