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

  constructor(private data: DataShareService, private http: HttpCommService) {
  }

  saveStudent(){
    this.http.saveStudent(this.name, this.email, this.password)
      .subscribe(res => {
        console.log(res);
        this.switchToLogin();
      });
  }

  switchToLogin() {
    this.data.changeAuthLevel("login");
  }
}
