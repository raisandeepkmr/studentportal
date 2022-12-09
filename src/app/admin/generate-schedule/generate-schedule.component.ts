import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";
import {DataShareService} from "../../service/data-share.service";

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
        this.schedules = new Array();
        this.data.showMessage("Schedule has been clear please check view and come back to see changes!");
      });
  }
}
