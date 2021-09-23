import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../MODELS/course.model';
import { CourseService } from '../../SERVICES/course.service';
import { HomeService } from '../../SERVICES/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  courseLists: Course[] = [];

  constructor(private courseService: CourseService, private router: Router) {
    courseService.getAll().subscribe((data) => (this.courseLists = data));
  }

  ngOnInit(): void {}

  seeDetails(course: Course) {
    this.router.navigate(['public/course-details', course.id]);
  }
}
