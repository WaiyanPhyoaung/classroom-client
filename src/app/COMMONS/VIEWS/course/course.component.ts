import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Course, Subject } from '../../MODELS/course.model';
import { Teacher } from '../../MODELS/user.model';
import { CourseService } from '../../SERVICES/course.service';

declare var bootstrap: any;

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit, AfterViewInit {
  modal: any;

  target: any;

  courseLists: Course[] = [];

  form: FormGroup;

  constructor(builder: FormBuilder, private courseService: CourseService) {
    this.form = builder.group({
      name: [''],
    });
  }

  ngOnInit(): void {
    this.getCourseLists();
  }

  ngAfterViewInit(): void {
    this.modal = new bootstrap.Modal('#edit_course');
  }
  getCourseLists() {
    this.courseService.getAll().subscribe((data) => {
      this.courseLists = data;

      if (this.form.get('name')?.value) {
        this.courseLists = this.courseLists.filter((val) =>
          val.name
            ?.toLowerCase()
            .includes(this.form.get('name')?.value.toLowerCase())
        );
      }
    });
  }
  open() {
    this.target = {};
    this.modal.show();
  }

  getWithId(course: Course) {
    this.target = course;
    this.modal.show();
  }

  save(data: Course) {
    if (data.id) {
      this.update(data);
    } else {
      this.addNew(data);
    }
  }
  addNew(course: Course) {
    this.fixCourse(course);

    this.courseService.add(course).subscribe((data) => {
      this.getCourseLists();
    });
  }
  update(course: Course) {
    this.fixCourse(course);
    this.courseService.update(course).subscribe((data) => {
      this.getCourseLists();
    });
  }

  fixCourse(course: Course) {
    const array = course.subjects;
    let subjArray: Subject[] = [];

    for (let i = 0; i < array.length; i++) {
      let subject1: Subject = { id: 0, name: '' };
      subject1.id = Number(array[i]);
      subjArray.push(subject1);
    }

    let teacher1: Teacher = { id: 0 };
    teacher1.id = Number(course.teacher);

    course.subjects = subjArray;
    course.teacher = teacher1;
  }
}
