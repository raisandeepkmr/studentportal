import { Component } from '@angular/core';
import {DataShareService} from "../../service/data-share.service";
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stu-update-information',
  templateUrl: './stu-update-information.component.html',
  styleUrls: ['./stu-update-information.component.css']
})
export class StuUpdateInformationComponent {
  name = '';
  userNumber = '';
  email = '';
  numCourses = '';
  password = '';
  address = '';
  phone = '';
  dob = '';

  constructor(private data: DataShareService, private http: HttpCommService, private router: Router) {
  }

  ngOnInit() {
    this.loadUserDetails();
  }

  loadUserDetails() {
    const type = "student";
    let userNumber: string = sessionStorage.getItem("number")!;
    this.http.getStudentDetails(userNumber).subscribe(stu => {
      console.log(stu);
      this.name = stu.name;
      this.userNumber = stu.number;
      this.email = stu.email;
      this.numCourses = stu.numCourses;
      this.password = stu.password;
      this.address = stu.address;
      this.phone = stu.phone;
      this.dob = stu.dob;
    });
  }

  updateStudent(){
    this.http.updateStudent(this.name, this.userNumber, this.email, this.numCourses, this.password, this.address, this.phone, this.dob)
      .subscribe(res => {
        this.router.navigate(["/student-update-info"])
        console.log(res);
      });
  }

  changeBDay(dDate: string) {
    this.dob = dDate;
  }
}
