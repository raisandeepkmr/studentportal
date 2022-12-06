import { Component } from '@angular/core';
import {DataShareService} from "../service/data-share.service";

@Component({
  selector: 'app-head-comp',
  templateUrl: './head-comp.component.html',
  styleUrls: ['./head-comp.component.css']
})
export class HeadCompComponent {

  constructor(private data: DataShareService) {
  }

  logOff() {
    sessionStorage.setItem("sp_token","");
    sessionStorage.setItem("token_expiry","");
    sessionStorage.setItem("number","");
    sessionStorage.setItem("userType","");
    sessionStorage.clear()
    this.data.changeAuthLevel("loggedoff")
  }
}
