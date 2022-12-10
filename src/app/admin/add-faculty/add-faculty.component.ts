import { Component } from '@angular/core';
import {DataShareService} from "../../service/data-share.service";
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent {
  title = 'Student Enrollment';
  name = '';
  email = '';
  courses = '';
  password = '';
  department = '';
  address = '';
  phone = '';
  dob = '';

  constructor(private data: DataShareService, private http: HttpCommService, private router: Router) {
  }

  saveFaculty(){
    this.http.saveFaculty(this.name, this.email, this.courses, this.password, this.department, this.address, this.phone, this.dob)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(["/view-faculties"])
      });
  }

  changeBDay(dDate: string) {
    this.dob = dDate;
  }
}
