import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { User } from '../user';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(private student:StudentService){
  }

 

  check(data:any){

    // console.log(data);
    this.student.saveUser(data).subscribe(result=>{
      console.log(result)
    })
  }

  userModel = new User("","","")
}
