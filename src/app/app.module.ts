import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './COMMONS/SERVICES/services.module';
import { HomeComponent } from './COMMONS/VIEWS/home/home.component';
import { SignInComponent } from './COMMONS/VIEWS/sign-in/sign-in.component';
import { AdminTeacherComponent } from './COMMONS/VIEWS/admin-teacher/admin-teacher.component';
import { AdminTeacherEditComponent } from './COMMONS/VIEWS/admin-teacher-edit/admin-teacher-edit.component';
import { CourseComponent } from './COMMONS/VIEWS/course/course.component';
import { AdminStudentComponent } from './COMMONS/VIEWS/admin-student/admin-student.component';
import { AdminStudentEditComponent } from './COMMONS/VIEWS/admin-student-edit/admin-student-edit.component';
import { SubjectAdminComponent } from './COMMONS/VIEWS/subject-admin/subject-admin.component';
import { SubjectEditComponent } from './COMMONS/VIEWS/subject-edit/subject-edit.component';
import { CourseEditComponent } from './COMMONS/VIEWS/course-edit/course-edit.component';
import { SignUpComponent } from './COMMONS/VIEWS/sign-up/sign-up.component';
import { CourseDetailsComponent } from './COMMONS/VIEWS/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    AdminTeacherComponent,
    AdminTeacherEditComponent,
    CourseComponent,
    AdminStudentComponent,
    AdminStudentEditComponent,
    SubjectAdminComponent,
    SubjectEditComponent,
    CourseEditComponent,
    SignUpComponent,
    CourseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
