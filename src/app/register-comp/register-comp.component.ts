import { Component } from '@angular/core';
import {DataShareService} from "../service/data-share.service";
import {HttpCommService} from "../service/http-comm.service";
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-register-comp',
  templateUrl: './register-comp.component.html',
  styleUrls: ['./register-comp.component.css']
})
export class RegisterCompComponent {
  title = 'Student Enrollment';
  name = '';
  email = '';
  password = '';
  address = '';
  phone = '';
  dob = '';

  constructor(private data: DataShareService, private http: HttpCommService) {
  }

  saveStudent(){
    this.http.saveStudent(this.name, this.email, this.password, this.address, this.phone, this.dob)
      .subscribe(res => {
        console.log(res);
        this.switchToLogin();
      });
  }

  switchToLogin() {
    this.data.changeAuthLevel("login");
  }
}
