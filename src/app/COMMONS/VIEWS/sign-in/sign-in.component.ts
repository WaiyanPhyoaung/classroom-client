import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher, User, UserType } from '../../MODELS/user.model';
import { UserService } from '../../SERVICES/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  email: FormControl;
  password: FormControl;
  passwordMatch = true;
  userLists: User[] = [];
  typeOfActiveUser: UserType = '';

  constructor(
    builder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = builder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
    });
    this.email = this.form.get('email') as FormControl;
    this.password = this.form.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((list) => {
      this.userLists = list;
      console.log(this.userLists);
    });
  }

  signIn() {
    for (const list of this.userLists) {
      if (list.emailAddress == this.email.value) {
        console.log('email true');

        if (list.password == this.password.value) {
          console.log('success');
          this.passwordMatch = true;
          this.typeOfActiveUser = list.type;

          this.userService.navigateByUserType(this.typeOfActiveUser);

          break;
        } else {
          this.passwordMatch = false;
          console.log('password false');
        }
      } else {
        this.passwordMatch = false;
      }
    }
  }
}
