import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Teacher } from '../../MODELS/user.model';
import { TeacherService } from '../../SERVICES/teacher.service';

declare var bootstrap: any;

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css'],
})
export class AdminTeacherComponent implements OnInit, AfterViewInit {
  modal: any;

  target: any;

  teacherLists: Teacher[] = [];

  form: FormGroup;

  constructor(builder: FormBuilder, private teacherService: TeacherService) {
    this.form = builder.group({
      name: [''],
    });
  }

  ngOnInit(): void {
    this.getTeacherLists();
  }

  ngAfterViewInit(): void {
    this.modal = new bootstrap.Modal('#edit_teacher');
  }
  getTeacherLists() {
    this.teacherService.getAllTeachers().subscribe((data) => {
      this.teacherLists = data;

      if (this.form.get('name')?.value) {
        this.teacherLists = this.teacherLists.filter((val) =>
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

  getTeacherWithId(teacher: Teacher) {
    this.target = teacher;
    this.modal.show();
  }

  save(data: Teacher) {
    if (data.id) {
      this.updateTeacher(data);
    } else {
      this.addNewTeacher(data);
    }
  }
  addNewTeacher(teacher: Teacher) {
    this.teacherService.addUser(teacher).subscribe((data) => {
      this.getTeacherLists();
      this.target = {};
    });
  }
  updateTeacher(teacher: Teacher) {
    this.teacherService.updateUser(teacher).subscribe((data) => {
      this.getTeacherLists();
      this.target = {};
    });
  }
}
