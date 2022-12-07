import { Component } from '@angular/core';
import {HttpCommService} from "../../service/http-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent {
  classRooms:any = [];
  name = '';
  campusName = 'MIC';
  capacity = '3';
  floor = '';
  description = '';

  constructor(private http: HttpCommService, private router: Router) {
    this.getAllClassrooms();
  }

  getAllClassrooms(){
    this.http.getAllFaculty()
      .subscribe(res => {
        console.log(res);
        this.classRooms = res;
      });
  }

  addRoom(){
    this.http.addClassroom(this.name, this.campusName, this.capacity, this.floor, this.description)
      .subscribe(res => {
        console.log(res);
      });
  }
}
