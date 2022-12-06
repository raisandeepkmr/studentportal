import { Component } from '@angular/core';
import {DataShareService} from "../service/data-share.service";
import {HttpCommService} from "../service/http-comm.service";

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent {
  email = '';
  password = '';
  userType = 'Professor';

  constructor(private data: DataShareService, private http: HttpCommService) {
  }

  loginUser() {
    this.http.loginUser(this.email, this.password, this.userType)
      .subscribe(res => {
        console.log(res);
        sessionStorage.setItem("sp_token",res.token);
        sessionStorage.setItem("token_expiry",res.token_expiry);
        sessionStorage.setItem("number",res.number);
        sessionStorage.setItem("userType",this.userType);
        this.data.changeAuthLevel("loggedin");
      })
  }

  switchUserType(event:any) {
    switch(event.target.checked) {
      case true:
        this.userType = "Student";
        break;
      case false:
        this.userType = "Professor";
        break;
    }
  }

  switchToRegister() {
    this.data.changeAuthLevel("register");
  }
}
