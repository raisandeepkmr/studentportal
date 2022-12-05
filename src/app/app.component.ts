import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Enrollment';

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
