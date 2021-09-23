import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from 'src/app/COMMONS/VIEWS/course-details/course-details.component';
import { HomeComponent } from 'src/app/COMMONS/VIEWS/home/home.component';
import { SignInComponent } from 'src/app/COMMONS/VIEWS/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/COMMONS/VIEWS/sign-up/sign-up.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'course-details/:id',
        component: CourseDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
