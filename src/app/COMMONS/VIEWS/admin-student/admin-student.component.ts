import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../../MODELS/user.model';
import { StudentService } from '../../SERVICES/student.service';

declare var bootstrap: any;

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css'],
})
export class AdminStudentComponent implements OnInit, AfterViewInit {
  modal: any;

  target: any;

  studentLists: Student[] = [];

  form: FormGroup;

  constructor(builder: FormBuilder, private studentService: StudentService) {
    this.form = builder.group({
      name: [''],
    });
  }

  ngOnInit(): void {
    this.getStudentLists();
  }

  ngAfterViewInit(): void {
    this.modal = new bootstrap.Modal('#edit_student');
  }
  getStudentLists() {
    this.studentService.getAll().subscribe((data) => {
      this.studentLists = data;

      if (this.form.get('name')?.value) {
        this.studentLists = this.studentLists.filter((val) =>
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

  getStudentWithId(student: Student) {
    this.target = student;
    this.modal.show();
  }

  save(data: Student) {
    if (data.id) {
      this.updateStudent(data);
    } else {
      this.addNewStudent(data);
    }
  }
  addNewStudent(student: Student) {
    this.studentService.add(student).subscribe((data) => {
      this.getStudentLists();
      this.target = {};
    });
  }
  updateStudent(student: Student) {
    this.studentService.update(student).subscribe((data) => {
      this.getStudentLists();
      this.target = {};
    });
  }
}
