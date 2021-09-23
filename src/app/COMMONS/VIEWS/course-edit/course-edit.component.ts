import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Course, Subject } from '../../MODELS/course.model';
import { Teacher } from '../../MODELS/user.model';
import { SubjectService } from '../../SERVICES/subject.service';
import { TeacherService } from '../../SERVICES/teacher.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css'],
})
export class CourseEditComponent implements OnInit {
  form: FormGroup;
  teacherLists: Teacher[] = [];
  subjectLists: Subject[] = [];

  @Output()
  onSave = new EventEmitter();

  @Input()
  set data(course: Course | any) {
    if (course?.id) this.form.patchValue(course);
    else {
      this.form.reset();
    }
  }

  constructor(
    builder: FormBuilder,
    private teacherService: TeacherService,
    private subjectService: SubjectService
  ) {
    this.form = builder.group({
      id: null,
      name: ['', Validators.required],
      fee: ['', Validators.required],
      startDate: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      teacher: ['', Validators.required],
      subjects: builder.array([]),
    });
    teacherService
      .getAllTeachers()
      .subscribe((data) => (this.teacherLists = data));

    subjectService.getAll().subscribe((data) => (this.subjectLists = data));
  }

  ngOnInit(): void {
    this.teacherService
      .getAllTeachers()
      .subscribe((data) => (this.teacherLists = data));

    this.subjectService
      .getAll()
      .subscribe((data) => (this.subjectLists = data));
  }

  save() {
    this.onSave.emit(this.form.value);
  }
  onCheckChange(event: any) {
    const formArray: FormArray = this.form.get('subjects') as FormArray;

    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;

      formArray.controls.forEach((ctrl) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }
}
