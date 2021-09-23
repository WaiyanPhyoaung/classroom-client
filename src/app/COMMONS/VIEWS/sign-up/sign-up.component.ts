import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../SERVICES/student.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(
    builder: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.form = builder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  signUp() {
    console.log(this.form.value);
    this.studentService.add(this.form.value).subscribe((data) => {
      console.log('success');
      this.router.navigate(['public/sign-in']);
    });
  }
}
