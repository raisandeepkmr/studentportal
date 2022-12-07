import { Component } from '@angular/core';
import {DataShareService} from "../../service/data-share.service";
import {HttpCommService} from "../../service/http-comm.service";

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

  constructor(private data: DataShareService, private http: HttpCommService) {
  }

  saveFaculty(){
    this.http.saveFaculty(this.name, this.email, this.courses, this.password, this.department)
      .subscribe(res => {
        console.log(res);
      });
  }
}
