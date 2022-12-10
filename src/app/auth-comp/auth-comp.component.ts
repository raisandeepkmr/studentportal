import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {DataShareService} from "../service/data-share.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-comp',
  templateUrl: './auth-comp.component.html',
  styleUrls: ['./auth-comp.component.css']
})
export class AuthCompComponent {
  isRegistring = false;
  isLoggedIn = false;

  message: string = "";
  subscription: Subscription | undefined;

  constructor(private data: DataShareService, private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => {
      this.message = message;
      let userType: string = sessionStorage.getItem("userType")!;
      console.log("Usertype: " + userType);
      console.log("Message: " + this.message);
      if(this.message === 'loggedin') {
        this.isLoggedIn = true;
        if(userType.toLowerCase() === 'admin')
          this.router.navigate(["/view-course-information"]);
        else if(userType.toLowerCase() === 'professor')
          this.router.navigate(["/faculty-update-info"]);
        else this.router.navigate(["student-update-info"]);
      } else if(this.message === 'loggedoff') {
        this.isLoggedIn = false;
      }
    });
  }

  ngOnDestroy() {
    // @ts-ignore
    this.subscription.unsubscribe();
  }

  switchRegister(stat: boolean) {
    this.isRegistring = stat;
  }
}
