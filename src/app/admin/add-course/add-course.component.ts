import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  professors:any = [];
  professor = '';
  courseId = '';
  minimumChrs = '3';
  code = '';
  name = '';
  description = '';

  constructor(private http: HttpCommService, private router: Router) {
    this.getAllFaculty();
  }

  getAllFaculty(){
    this.http.getAllFaculty()
      .subscribe(res => {
        console.log("Professors");
        console.log(res);
        this.professors = res;
      });
  }

  addCourse() {
    this.http.addCourse(this.courseId, this.minimumChrs, this.code, this.name, this.description, this.professor)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(["/view-course-information"]);
      });
  }

  changeProfessor(profName:any) {
    this.professor = profName;
  }

}
