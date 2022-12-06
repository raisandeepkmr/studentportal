import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {DataShareService} from "../service/data-share.service";

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

  constructor(private data: DataShareService) {
  }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => {
      this.message = message;
      console.log("Message: " + this.message);
      if(this.message === 'login') {
        this.switchRegister(false);
      } else if(this.message === 'register') {
        this.switchRegister(true);
      } else if(this.message === 'loggedin') {
        this.isLoggedIn = true;
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
