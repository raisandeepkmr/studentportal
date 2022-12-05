import { Component } from '@angular/core';

@Component({
  selector: 'app-head-comp',
  templateUrl: './head-comp.component.html',
  styleUrls: ['./head-comp.component.css']
})
export class HeadCompComponent {

  logOff() {
    sessionStorage.setItem("sp_token","");
    sessionStorage.setItem("token_expiry","");
    sessionStorage.setItem("number","");
    sessionStorage.clear()
  }
}
