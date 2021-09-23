import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Teacher } from '../../MODELS/user.model';

@Component({
  selector: 'app-admin-teacher-edit',
  templateUrl: './admin-teacher-edit.component.html',
  styleUrls: ['./admin-teacher-edit.component.css'],
})
export class AdminTeacherEditComponent implements OnInit {
  form: FormGroup;

  @Output()
  onSave = new EventEmitter();

  @Input()
  set data(teacher: Teacher | any) {
    if (teacher?.id) this.form.patchValue(teacher);
    else {
      this.form.reset();
      this.form.get('type')?.setValue('TEACHER');
    }
  }

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      id: null,
      type: 'TEACHER',
      name: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required],
      education: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  save() {
    this.onSave.emit(this.form.value);
  }
}
