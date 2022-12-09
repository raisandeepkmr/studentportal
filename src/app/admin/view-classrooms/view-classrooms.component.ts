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
  minimumChrs = '';
  code = '';
  name = '';
  description = '';

  constructor(private http: HttpCommService, private router: Router) {
    this.loadCourses();
  }

  loadCourses() {
    this.http.getAllRooms()
      .subscribe(res => {
        console.log(res);
        this.classRooms = res;
      });
  }

  delete(roomName: string){
    this.http.deleteRoom(roomName)
      .subscribe(res => {
        console.log(res);
        this.loadCourses();
      });
  }

  isAdmin(){
    const userType = sessionStorage.getItem("userType")!;
    if(userType.toLowerCase() === 'admin') return true;
    return false;
  }
}
