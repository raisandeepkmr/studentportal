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
  courses:any = [];
  professors:any = [];
  classRooms:any = [];
  scheduleDetails:any = [];
  selectedCourse:any;
  selectedProf:any;
  selectedRoom:any;
  selectedDate:any;
  selectedTime:any;
  startTimes:any = [];

  constructor(private http: HttpCommService, private router: Router, private data: DataShareService) {
    this.loadCourses();
    this.loadProfessors();
    this.loadClassRooms();
    this.loadScheduleDetails();
  }

  loadProfessors() {
    this.http.getAllFaculty()
      .subscribe(res => {
        this.professors = res;
      });
  }

  loadClassRooms() {
    this.http.getAllRooms()
      .subscribe(res => {
        this.classRooms = res;
      });
  }

  loadCourses() {
    this.http.getAllCourses()
      .subscribe(res => {
        this.courses = res;
      });
  }

  loadScheduleDetails() {
    this.http.loadScheduleDetails()
      .subscribe(res => {
        console.log(res);
        this.scheduleDetails = res;
        const startDate = new Date(res.startDate);
        this.startTimes.push(startDate.toTimeString());
        for (let i = 0; i < 4; i++) {
          const tempDate = new Date(startDate.getTime() + ((i+1)*170*60*1000));
          this.startTimes.push(tempDate.toTimeString());
        }
      });
  }

  changeSubject(sub:string){
    this.selectedCourse = sub;
    console.log(sub);
  }

  changeProfessor(prof:string){
    this.selectedProf = prof;
    console.log(prof);
  }

  changeRoom(room:string) {
    this.selectedRoom = room;
    console.log(room);
  }

  changeStartTime(startTime:string) {
    this.selectedTime = startTime;
    console.log(startTime);
  }

  changeStartDay(startDay:string) {
    this.selectedDate = startDay;
    console.log(startDay);
  }

  saveSchedule() {
    const schedule = {
      facultyId: this.selectedProf,
      courseId: this.selectedCourse,
      roomId: this.selectedRoom,
      startDate: this.scheduleDetails.startDate,
      endDate: this.scheduleDetails.endDate,
      date: this.selectedDate,
      time: this.selectedTime
    };
    console.log(schedule);
    this.http.saveSchedule(schedule)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(["/schedule-details"])
      });
  }

  getDate(dDate:any): string {
    return new Date(dDate).toDateString();
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatTime(dDate: any) {
    const date = new Date(dDate);
    console.log(date);
    return date;
  }
}
