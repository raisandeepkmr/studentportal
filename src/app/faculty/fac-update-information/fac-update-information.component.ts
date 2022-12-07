import { Component } from '@angular/core';
import {DataShareService} from "../../service/data-share.service";
import {HttpCommService} from "../../service/http-comm.service";

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

  constructor(private data: DataShareService, private http: HttpCommService) {
  }

  ngOnInit() {
    this.loadUserDetails();
  }

  loadUserDetails() {
    const type = "professor";
    let userNumber: string = sessionStorage.getItem("number")!;
    this.http.getFacultyDetails(userNumber).subscribe(fac => {
      this.name = fac.name;
      this.userNumber = fac.number;
      this.email = fac.email;
      this.numCourses = fac.numCourses;
    });
  }
}
