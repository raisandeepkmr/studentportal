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

  getStudentDetails(stuNumber: string): Observable<any> {
    return this.http.get(this.svcUrl + "/student/number/" + stuNumber, this.httpOptions);
  }

  updateStudent(name: string, userNum: string, email: string, numCourse: string, password: string): Observable<any> {
    return this.http.put(this.svcUrl + "/student",{name: name, number: userNum, email: email, numCourse: numCourse, password: password}, this.httpOptions);
  }

  saveStudent(name: string, email: string, password: string): Observable<any> {
    return this.http.post(this.svcUrl + "/student",{name: name, number: '', email: email, numCourses: '0', password: password}, this.httpOptions);
  }

  addCourse(courseId:string, minimumChrs:string, code:string, name:string, description:string, professor:string): Observable<any> {
    return this.http.post(this.svcUrl + "/course",{courseId: courseId, minimumChrs: minimumChrs, code: code, name: name, description: description, facultyId:professor}, this.httpOptions);
  }

  deleteCourse(courseId:string): Observable<any> {
    return this.http.delete(this.svcUrl + "/course/courseId/" + courseId, this.httpOptions);
  }

  getAllCourses(): Observable<any> {
    return this.http.get(this.svcUrl + "/course", this.httpOptions);
  }

  getAllFaculty(): Observable<any> {
    return this.http.get(this.svcUrl + "/faculty", this.httpOptions);
  }

  loginUser(email: string, password: string, userType: string): Observable<any> {
    return this.http.post(this.svcUrl + "/login",{email: email, password: password, user_type: userType}, this.httpOptions);
  }

  userLogin(email: string, password: string): Observable<any> {
    return this.http.post(this.svcUrl + "/login",{email: email, password: password}, this.httpOptions);
  }
}
