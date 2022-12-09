import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";
import {DataShareService} from "../../service/data-share.service";

@Component({
  selector: 'app-assign-courses',
  templateUrl: './assign-courses.component.html',
  styleUrls: ['./assign-courses.component.css']
})
export class AssignCoursesComponent {
  schedules:any = [];
  courses:any = [];
  minimumChrs = '';
  code = '';
  name = '';
  description = '';

  constructor(private http: HttpCommService, private router: Router, private data: DataShareService) {
    this.loadCourses();
    this.loadSchedule();
  }

  loadCourses() {
    this.http.getAllCourses()
      .subscribe(res => {
        console.log(res);
        this.courses = res;
      });
  }

  loadSchedule() {
    this.http.getAllSchedule()
      .subscribe(res => {
        console.log(res);
        this.schedules = res;
      });
  }

  generateSchedule() {
    this.http.generateSchedule()
      .subscribe(res => {
        console.log(res);
        this.schedules = res;
      });
  }

  deleteSchedule() {
    this.http.deleteSchedule()
      .subscribe(res => {
        this.schedules = [];
      });
  }
  // this.data.showMessage("Changing the fucking message!" + courseId);

  assign(courseId: string){
    let studentId:string = sessionStorage.getItem("number")!;
    this.http.assignCourse(courseId, studentId)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.data.showMessage("Course successfully assigned!");
          this.router.navigate(["/student-update-info"]);
        },
        error: (err) =>{
          console.log(err);
          this.data.showMessage("[HTTP: " + err.status +"] " + err.error.error);
        }
      });
  }

  isStudent(){
    const userType = sessionStorage.getItem("userType")!;
    if(userType.toLowerCase() === 'student') return true;
    return false;
  }
}
