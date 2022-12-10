import {Component} from '@angular/core';
import {DataShareService} from "../../service/data-share.service";
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fac-update-information',
  templateUrl: './fac-update-information.component.html',
  styleUrls: ['./fac-update-information.component.css']
})
export class FacUpdateInformationComponent {
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
    const type = "professor";
    let userNumber: string = sessionStorage.getItem("number")!;
    console.log("userNumber");
    console.log(userNumber);
    this.http.getFacultyDetails(userNumber).subscribe(fac => {
      console.log(fac);
      this.name = fac.name;
      this.userNumber = fac.number;
      this.email = fac.email;
      this.numCourses = fac.numCourses;
      this.password = fac.password;
      this.address = fac.address;
      this.phone = fac.phone;
      this.dob = fac.dob;
    });
  }

  updateFaculty() {
    this.http.updateFaculty(this.name, this.userNumber, this.email, this.numCourses, this.password, this.address, this.phone, this.dob)
      .subscribe(res => {
        this.router.navigate(["/faculty-update-info"])
        console.log(res);
      });
  }

  changeBDay(dDate: string) {
    this.dob = dDate;
  }
}
