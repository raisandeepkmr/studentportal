import { Component } from '@angular/core';
import {DataShareService} from "../../service/data-share.service";
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  title = 'Student Enrollment';
  name = '';
  email = '';
  password = '';
  address = '';
  phone = '';
  bday = '';

  constructor(private data: DataShareService, private http: HttpCommService, private router: Router) {
  }

  saveStudent(){
    this.http.saveStudent(this.name, this.email, this.password, this.address, this.phone, this.bday)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(["/view-students"])
      });
  }

  changeBDay(dDate: string) {
    this.bday = dDate;
  }
}
