import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";
import {DataShareService} from "../../service/data-share.service";

@Component({
  selector: 'app-students-schedule',
  templateUrl: './students-schedule.component.html',
  styleUrls: ['./students-schedule.component.css']
})
export class StudentsScheduleComponent {
  schedules:any = [];

  constructor(private http: HttpCommService, private router: Router, private data: DataShareService) {
    this.loadSchedules();
  }

  loadSchedules() {
    let studentId: string = sessionStorage.getItem("number")!;
    this.http.getAllStudentScheduleDetails(studentId)
      .subscribe(res => {
        this.schedules = res;
        console.log(res);
      })
  }

}
