import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-students-information',
  templateUrl: './students-information.component.html',
  styleUrls: ['./students-information.component.css']
})
export class StudentsInformationComponent {
  students:any = [];
  minimumChrs = '';
  code = '';
  name = '';
  description = '';

  constructor(private http: HttpCommService, private router: Router) {
    this.loadStudents();
  }

  loadStudents() {
    this.http.getAllStudent()
      .subscribe(res => {
        console.log(res);
        this.students = res;
      });
  }

  delete(studentId: string){
    this.http.deleteStudent(studentId)
      .subscribe(res => {
        console.log(res);
        this.loadStudents();
      });
  }

  isProfessor(){
    const userType = sessionStorage.getItem("userType")!;
    if(userType.toLowerCase() === 'professor') return true;
    return false;
  }

  isAdmin(){
    const userType = sessionStorage.getItem("userType")!;
    if(userType.toLowerCase() === 'admin') return true;
    return false;
  }
}
