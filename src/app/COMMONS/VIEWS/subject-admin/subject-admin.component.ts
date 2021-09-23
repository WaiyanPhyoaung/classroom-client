import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from '../../MODELS/course.model';
import { SubjectService } from '../../SERVICES/subject.service';

declare var bootstrap: any;

@Component({
  selector: 'app-subject-admin',
  templateUrl: './subject-admin.component.html',
  styleUrls: ['./subject-admin.component.css'],
})
export class SubjectAdminComponent implements OnInit, AfterViewInit {
  modal: any;

  target: any;

  subjectLists: Subject[] = [];

  form: FormGroup;

  constructor(builder: FormBuilder, private subjectService: SubjectService) {
    this.form = builder.group({
      name: [''],
    });
  }

  ngOnInit(): void {
    this.getSubjectLists();
  }

  ngAfterViewInit(): void {
    this.modal = new bootstrap.Modal('#edit_subject');
  }
  getSubjectLists() {
    this.subjectService.getAll().subscribe((data) => {
      this.subjectLists = data;

      if (this.form.get('name')?.value) {
        this.subjectLists = this.subjectLists.filter((val) =>
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

  getWithId(subject: Subject) {
    this.target = subject;
    this.modal.show();
  }

  save(data: Subject) {
    if (data.id) {
      this.update(data);
    } else {
      this.addNew(data);
    }
  }
  addNew(subject: Subject) {
    this.subjectService.add(subject).subscribe((data) => {
      this.getSubjectLists();
      this.target = {};
    });
  }
  update(subject: Subject) {
    this.subjectService.update(subject).subscribe((data) => {
      this.getSubjectLists();
      this.target = {};
    });
  }
}
