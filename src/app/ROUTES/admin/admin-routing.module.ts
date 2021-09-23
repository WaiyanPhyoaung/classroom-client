import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminStudentComponent } from 'src/app/COMMONS/VIEWS/admin-student/admin-student.component';
import { AdminTeacherComponent } from 'src/app/COMMONS/VIEWS/admin-teacher/admin-teacher.component';
import { CourseComponent } from 'src/app/COMMONS/VIEWS/course/course.component';
import { HomeComponent } from 'src/app/COMMONS/VIEWS/home/home.component';
import { SubjectAdminComponent } from 'src/app/COMMONS/VIEWS/subject-admin/subject-admin.component';
import { StudentComponent } from '../student/student.component';
import { TeacherComponent } from '../teacher/teacher.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'course', component: CourseComponent },
      {
        path: 'student',
        component: AdminStudentComponent,
      },
      {
        path: 'subject',
        component: SubjectAdminComponent,
      },
      {
        path: 'teacher',
        component: AdminTeacherComponent,
      },
      { path: '', redirectTo: 'course', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
