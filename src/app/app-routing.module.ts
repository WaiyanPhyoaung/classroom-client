import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './COMMONS/SECURITY/admin.guard';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () =>
      import('./ROUTES/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./ROUTES/teacher/teacher.module').then((m) => m.TeacherModule),
  },

  {
    path: 'public',
    loadChildren: () =>
      import('./ROUTES/public/public.module').then((m) => m.PublicModule),
  },

  {
    path: 'admin',
    // canActivate: [AdminGuard],
    // canActivateChild: [AdminGuard],
    loadChildren: () =>
      import('./ROUTES/admin/admin.module').then((m) => m.AdminModule),
  },

  { path: '', redirectTo: '/public', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
