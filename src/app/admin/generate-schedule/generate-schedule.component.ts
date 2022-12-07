import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-generate-schedule',
  templateUrl: './generate-schedule.component.html',
  styleUrls: ['./generate-schedule.component.css']
})
export class GenerateScheduleComponent {
  schedules:any = [];
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

  generateSchedule() {

  }
}
