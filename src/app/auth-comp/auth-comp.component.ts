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

  message: string = "";
  subscription: Subscription | undefined;

  constructor(private data: DataShareService) {
  }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => {
      this.message = message;
      console.log("Message: " + this.message);
      this.switchRegister();
    });
  }

  ngOnDestroy() {
    // @ts-ignore
    this.subscription.unsubscribe();
  }

  switchRegister() {
    this.isRegistring = this.isRegistring ? false: true;
  }
}
