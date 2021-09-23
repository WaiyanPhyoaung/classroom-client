import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from '../../MODELS/course.model';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css'],
})
export class SubjectEditComponent implements OnInit {
  form: FormGroup;

  @Output()
  onSave = new EventEmitter();

  @Input()
  set data(subject: Subject | any) {
    if (subject?.id) this.form.patchValue(subject);
    else {
      this.form.reset();
    }
  }

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      id: null,
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  save() {
    this.onSave.emit(this.form.value);
  }
}
