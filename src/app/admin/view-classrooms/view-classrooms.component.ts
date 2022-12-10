import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-classrooms',
  templateUrl: './view-classrooms.component.html',
  styleUrls: ['./view-classrooms.component.css']
})
export class ViewClassroomsComponent {
  classRooms:any = [];
  sections:any = [];
  minimumChrs = '';
  code = '';
  name = '';
  description = '';

  constructor(private http: HttpCommService, private router: Router) {
    this.loadClassrooms();
  }

  loadClassrooms() {
    this.http.getAllRooms()
      .subscribe(res => {
        console.log(res);
        this.classRooms = res;
        this.loadSections();
      });
  }

  loadSections() {
    this.http.getAllSchedule()
      .subscribe(res => {
        // console.log(res);
        this.sections = res;
        this.classRooms.forEach((clas: any) => {
          this.sections.forEach((sec:any) => {
            if(clas.name === sec.roomId) {
              console.log(clas.capacity);
              console.log(sec.roomId);
            }
          });
        });
      });
  }

  delete(roomName: string){
    this.http.deleteRoom(roomName)
      .subscribe(res => {
        console.log(res);
        this.loadClassrooms();
      });
  }

  isAdmin(){
    const userType = sessionStorage.getItem("userType")!;
    if(userType.toLowerCase() === 'admin') return true;
    return false;
  }
}
