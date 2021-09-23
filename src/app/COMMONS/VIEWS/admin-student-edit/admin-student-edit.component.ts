import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../../MODELS/user.model';

@Component({
  selector: 'app-admin-student-edit',
  templateUrl: './admin-student-edit.component.html',
  styleUrls: ['./admin-student-edit.component.css'],
})
export class AdminStudentEditComponent implements OnInit {
  form: FormGroup;

  @Output()
  onSave = new EventEmitter();

  @Input()
  set data(student: Student | any) {
    if (student?.id) this.form.patchValue(student);
    else {
      this.form.reset();
      this.form.get('type')?.setValue('STUDENT');
    }
  }

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      id: null,
      type: 'STUDENT',
      name: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required],
      registrationNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  save() {
    this.onSave.emit(this.form.value);
  }
}
