import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../../MODELS/course.model';
import { CourseService } from '../../SERVICES/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  courseID: number = 0;
  course?: Course;

  constructor(
    activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {
    activatedRoute.params.subscribe((param) => {
      this.courseID = param['id'];
    });
  }

  ngOnInit(): void {
    // Testing pipe and map fun

    // let obs = of([
    //   { id: 0, name: 'a' },
    //   { id: 1, name: 'a' },
    //   { id: 2, name: 'a' },
    //   { id: 3, name: 'a' },
    //   { id: 4, name: 'a' },
    //   { id: 5, name: 'a' },
    // ]);

    // let a = obs
    //   .pipe(map((arr) => arr.find((a) => a.id === 5)))
    //   .subscribe((val) => console.log(val));

    this.courseService
      .getAll()
      .pipe(map((arr) => arr.find((a) => a.id === Number(this.courseID))))
      .subscribe((val) => (this.course = val));
  }
}
