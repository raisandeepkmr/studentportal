import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";
import {DataShareService} from "../../service/data-share.service";

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent {
  schedules:any = [];

  constructor(private http: HttpCommService, private router: Router, private data: DataShareService) {
    this.loadSchedules();
  }

  loadSchedules() {
    this.http.getAllScheduleDetails()
      .subscribe(res => {
        this.schedules = res;
        console.log(res);
      })
  }

  delete(scheduleId: string) {
    this.http.deleteScheduleById(scheduleId)
      .subscribe(res => {
        console.log(res);
      })
  }
}
