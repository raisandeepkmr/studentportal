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

  constructor(private data: DataShareService, private http: HttpCommService, private router: Router) {
  }

  saveStudent(){
    this.http.saveStudent(this.name, this.email, this.password)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(["/view-students"])
      });
  }
}
