import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-postcall',
  templateUrl: './postcall.component.html',
  styleUrls: ['./postcall.component.scss']
})
export class PostcallComponent implements OnInit{

  public mystudents:any;

  constructor(public student:StudentService){}

  ngOnInit(): void {
    this.student.getUser().subscribe(data=>{
      this.mystudents=data;
    });

    
  }

  onDelete(data:any){
      this.student.deleteUser(data).subscribe(result=>{
        alert('Record delete');
        this.student.getUser().subscribe(data=>{
          this.mystudents=data;
        });
      })
  }
}
