import { Component } from '@angular/core';
import {DataShareService} from "../service/data-share.service";
import {HttpCommService} from "../service/http-comm.service";

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent {
  title = 'Student Enrollment';
  email = '';
  password = '';
  userType = 'Student';
  userTypeLabel = 'Student';

  constructor(private data: DataShareService, private http: HttpCommService) {
  }

  loginUser() {
    this.http.loginUser(this.email, this.password, this.userType)
      .subscribe(res => {
        sessionStorage.setItem("sp_token",res.token);
        sessionStorage.setItem("token_expiry",res.token_expiry);
        sessionStorage.setItem("number",res.number);
        if(res.userType === "admin") sessionStorage.setItem("userType","admin");
        else sessionStorage.setItem("userType",this.userType);
        this.data.changeAuthLevel("loggedin");
      })
  }

  switchUserType(event:any) {
    switch(event.target.checked) {
      case true:
        this.userType = "Student";
        this.userTypeLabel = "Student";
        break;
      case false:
        this.userType = "Professor";
        this.userTypeLabel = "Admin/Professor";
        break;
    }
  }

  switchToRegister() {
    this.data.changeAuthLevel("register");
  }
}
