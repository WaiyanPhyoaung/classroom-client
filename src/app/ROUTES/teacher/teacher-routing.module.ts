import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminStudentComponent } from 'src/app/COMMONS/VIEWS/admin-student/admin-student.component';
import { CourseComponent } from 'src/app/COMMONS/VIEWS/course/course.component';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      { path: 'course', component: CourseComponent },

      { path: '', redirectTo: 'course', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
