import {Component, ElementRef, ViewChild} from '@angular/core';
import {DataShareService} from "./service/data-share.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

declare let $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Enrollment';

  @ViewChild('theModal') theModal: ElementRef | undefined;
  showMessageSubs: Subscription | undefined;
  message = '';

  constructor(private data: DataShareService, private router: Router) {
  }

  ngOnInit() {
    this.showMessageSubs = this.data.showCurrentMessage.subscribe(message => {
      console.log(message);
      this.message = message;
      console.log(this.theModal);
      $(this.theModal?.nativeElement).modal('show');
    });
  }

  canBeLoaded(): boolean {
    let token: string | null = sessionStorage.getItem("sp_token")
    if(token) {
      let token_expiry: string | null = sessionStorage.getItem("token_expiry");
      if(token_expiry != null && token_expiry.length > 0) {
        let expiryDate: Date = new Date(token_expiry);
      }
    }
    return false;
  }
}
