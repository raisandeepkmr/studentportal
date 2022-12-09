import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-faculty-information',
  templateUrl: './faculty-information.component.html',
  styleUrls: ['./faculty-information.component.css']
})
export class FacultyInformationComponent {
  faculties:any = [];
  minimumChrs = '';
  code = '';
  name = '';
  description = '';

  constructor(private http: HttpCommService, private router: Router) {
    this.loadFaculties();
  }

  loadFaculties() {
    this.http.getAllFaculty()
      .subscribe(res => {
        console.log(res);
        this.faculties = res;
      });
  }

  delete(facultyId: string){
    this.http.deleteFaculty(facultyId)
      .subscribe(res => {
        console.log(res);
        this.loadFaculties();
      });
  }

  isAdmin(){
    const userType = sessionStorage.getItem("userType")!;
    if(userType.toLowerCase() === 'admin') return true;
    return false;
  }
}
