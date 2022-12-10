import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css']
})
export class StudentsViewComponent {
  students:any = [];
  minimumChrs = '';
  code = '';
  name = '';
  description = '';

  constructor(private http: HttpCommService, private router: Router) {
    this.loadStudents();
  }

  loadStudents() {
    const facNumber = sessionStorage.getItem("number")!;
    this.http.getAllFacultyStudent(facNumber)
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
