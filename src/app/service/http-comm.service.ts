import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpCommService {
  private svcUrl = "http://localhost:8080";
  httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
  }

  getFacultyDetails(stuNumber: string): Observable<any> {
    return this.http.get(this.svcUrl + "/faculty/number/" + stuNumber, this.httpOptions);
  }

  getAllFacultyStudent(facNumber: string): Observable<any> {
    return this.http.get(this.svcUrl + "/faculty/students/" + facNumber, this.httpOptions);
  }

  getStudentDetails(stuNumber: string): Observable<any> {
    return this.http.get(this.svcUrl + "/student/number/" + stuNumber, this.httpOptions);
  }

  getAllStudent(): Observable<any> {
    return this.http.get(this.svcUrl + "/student", this.httpOptions);
  }

  updateStudent(name: string, userNum: string, email: string, numCourse: string, password: string, address: string, phone: string, dob: string): Observable<any> {
    return this.http.put(this.svcUrl + "/student",{name: name, number: userNum, email: email, numCourse: numCourse, password: password, address: address, phone: phone, dob: dob}, this.httpOptions);
  }

  saveStudent(name: string, email: string, password: string, address: string, phone: string, bday: string): Observable<any> {
    return this.http.post(this.svcUrl + "/student",{name: name, number: '', email: email, numCourses: '0', password: password, address: address, phone: phone, dob: phone}, this.httpOptions);
  }

  deleteStudent(studentId: string): Observable<any> {
    return this.http.delete(this.svcUrl + "/student/" + studentId, this.httpOptions);
  }

  saveFaculty(name:string, email:string, courses:string, password:string, department:string, address:string, phone:string, dob:string): Observable<any> {
    return this.http.post(this.svcUrl + "/faculty",{name:name, email:email, courses:courses, password:password, department:department, address:address, phone:phone, dob:dob}, this.httpOptions);
  }

  updateFaculty(name:string, email:string, courses:string, password:string, department:string, address:string, phone:string, dob:string): Observable<any> {
    return this.http.put(this.svcUrl + "/faculty",{name:name, email:email, courses:courses, password:password, department:department, address:address, phone:phone, dob:dob}, this.httpOptions);
  }

  addCourse(courseId:string, minimumChrs:string, code:string, name:string, description:string, professor:string): Observable<any> {
    return this.http.post(this.svcUrl + "/course",{courseId: courseId, minimumChrs: minimumChrs, code: code, name: name, description: description, facultyId:professor}, this.httpOptions);
  }

  addClassroom(name:string, campusName:string, capacity:string, floor:string, description:string): Observable<any> {
    return this.http.post(this.svcUrl + "/campus/rooms",{name:name, campusName:campusName, capacity:capacity, floor:floor, description:description}, this.httpOptions);
  }

  getAllRooms(): Observable<any> {
    return this.http.get(this.svcUrl + "/campus/rooms", this.httpOptions);
  }

  deleteRoom(roomName:string): Observable<any> {
    return this.http.delete(this.svcUrl + "/campus/room/" + roomName, this.httpOptions);
  }

  deleteCourse(courseId:string): Observable<any> {
    return this.http.delete(this.svcUrl + "/course/courseId/" + courseId, this.httpOptions);
  }

  getAllCourses(): Observable<any> {
    return this.http.get(this.svcUrl + "/course", this.httpOptions);
  }

  loadScheduleDetails(): Observable<any> {
    return this.http.get(this.svcUrl + "/enrolled/schedule/get", this.httpOptions);
  }

  saveSchedule(schedul:any): Observable<any> {
    return this.http.post(this.svcUrl + "/enrolled/schedule", schedul, this.httpOptions);
  }

  assignCourse(scheduleId:string,studentId:string): Observable<any> {
    return this.http.post(this.svcUrl + "/course/assign", {scheduleId: scheduleId, studentId:studentId}, this.httpOptions);
  }

  getAllFaculty(): Observable<any> {
    return this.http.get(this.svcUrl + "/faculty", this.httpOptions);
  }

  deleteFaculty(facultyId:string): Observable<any> {
    return this.http.delete(this.svcUrl + "/faculty/" + facultyId, this.httpOptions);
  }

  loginUser(email: string, password: string, userType: string): Observable<any> {
    return this.http.post(this.svcUrl + "/login",{email: email, password: password, user_type: userType}, this.httpOptions);
  }

  userLogin(email: string, password: string): Observable<any> {
    return this.http.post(this.svcUrl + "/login",{email: email, password: password}, this.httpOptions);
  }

  generateSchedule(): Observable<any> {
    return this.http.get(this.svcUrl + "/login/timetable", this.httpOptions);
  }

  deleteSchedule(): Observable<any> {
    return this.http.delete(this.svcUrl + "/login/timetable", this.httpOptions);
  }

  getAllSchedule(): Observable<any> {
    return this.http.get(this.svcUrl + "/login/timetable/all", this.httpOptions);
  }

  getAllScheduleDetails(): Observable<any> {
    return this.http.get(this.svcUrl + "/enrolled/schedule/all", this.httpOptions);
  }

  getAllStudentScheduleDetails(studentNumber:string): Observable<any> {
    return this.http.get(this.svcUrl + "/student/schedule/" + studentNumber, this.httpOptions);
  }

  deleteScheduleById(scheduleId:string): Observable<any> {
    return this.http.delete(this.svcUrl + "/enrolled/schedule/" + scheduleId, this.httpOptions);
  }
}
