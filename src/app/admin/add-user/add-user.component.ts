import { Component } from '@angular/core';
import {DataShareService} from "../../service/data-share.service";
import {HttpCommService} from "../../service/http-comm.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
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
      });
  }
}
