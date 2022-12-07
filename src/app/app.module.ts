import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadCompComponent } from './head-comp/head-comp.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { RegisterCompComponent } from './register-comp/register-comp.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { AuthCompComponent } from './auth-comp/auth-comp.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AssignCoursesComponent } from './student/assign-courses/assign-courses.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AddClassroomComponent } from './admin/add-classroom/add-classroom.component';
import { GenerateScheduleComponent } from './admin/generate-schedule/generate-schedule.component';
import { FacUpdateInformationComponent } from './faculty/fac-update-information/fac-update-information.component';
import { StuUpdateInformationComponent } from './student/stu-update-information/stu-update-information.component';
import { CourseInformationComponent } from './common/course-information/course-information.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AddFacultyComponent } from './admin/add-faculty/add-faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadCompComponent,
    LoginCompComponent,
    RegisterCompComponent,
    MainCompComponent,
    AuthCompComponent,
    AssignCoursesComponent,
    AddCourseComponent,
    AddClassroomComponent,
    GenerateScheduleComponent,
    FacUpdateInformationComponent,
    StuUpdateInformationComponent,
    CourseInformationComponent,
    AddUserComponent,
    AddFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'assign-courses', component: AssignCoursesComponent},
      {path: 'student-update-info', component: StuUpdateInformationComponent},
      {path: 'faculty-update-info', component: FacUpdateInformationComponent},
      {path: 'add-classroom', component: AddClassroomComponent},
      {path: 'add-course', component: AddCourseComponent},
      {path: 'generate-schedule', component: GenerateScheduleComponent},
      {path: 'add-student', component: AddUserComponent},
      {path: 'add-faculty', component: AddFacultyComponent},
      {path: 'view-course-information', component: CourseInformationComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
