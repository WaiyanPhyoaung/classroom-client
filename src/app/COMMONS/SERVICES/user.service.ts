import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User, UserType } from '../MODELS/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user_url = 'http://localhost:8080/classroom/v1/api/userLists';

  isAdmin = false;
  isTeacher = false;

  constructor(private http: HttpClient, private router: Router) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.user_url}`);
  }

  getUserById(id: number) {
    return null;
  }
  addUser(newUser: User) {
    return null;
  }
  updateUser(id: number, updateUser: User) {
    return null;
  }
  deleteUser(id: number) {
    return null;
  }
  navigateByUserType(type: UserType) {
    switch (type) {
      case 'ADMIN': {
        this.isAdmin = true;
        this.router.navigate(['admin']);
        break;
      }

      case 'TEACHER': {
        this.isTeacher = true;
        this.router.navigate(['teacher']);
        break;
      }
      case 'STUDENT': {
        this.router.navigate(['public']);
        break;
      }
    }
  }
}
