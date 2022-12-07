import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-information',
  templateUrl: './course-information.component.html',
  styleUrls: ['./course-information.component.css']
})
export class CourseInformationComponent {
  courses:any = [];
  minimumChrs = '';
  code = '';
  name = '';
  description = '';

  constructor(private http: HttpCommService, private router: Router) {
    this.loadCourses();
  }

  loadCourses() {
    this.http.getAllCourses()
      .subscribe(res => {
        console.log(res);
        this.courses = res;
      });
  }

  delete(courseId: string){
    this.http.deleteCourse(courseId)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(["/view-course-information"]);
      });
  }

  isAdmin(){
    const userType = sessionStorage.getItem("userType")!;
    if(userType.toLowerCase() === 'admin') return true;
    return false;
  }

}
