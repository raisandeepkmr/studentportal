import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpCommService {
  private svcUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  saveStudent(name: string, email: string, password: string): Observable<any> {
    return this.http.post(this.svcUrl + "/student",{name: name, number: '', email: email, numCourses: '0', password: password});
  }

  loginUser(email: string, password: string, userType: string): Observable<any> {
    return this.http.post(this.svcUrl + "/login",{email: email, password: password, user_type: userType});
  }

  userLogin(email: string, password: string): Observable<any> {
    return this.http.post(this.svcUrl + "/login",{email: email, password: password});
  }
}
