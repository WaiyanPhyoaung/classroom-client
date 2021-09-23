import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Teacher, User } from '../MODELS/user.model';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private teacher_url = 'http://localhost:8080/classroom/v1/api/teacherLists';

  constructor(private http: HttpClient) {}

  getAllTeachers(): Observable<any> {
    return this.http.get(`${this.teacher_url}`);
  }

  getUserById(id: number) {
    return null;
  }
  addUser(teacher: Teacher) {
    return this.http.post(`${this.teacher_url}`, teacher);
  }
  updateUser(updateTeacher: Teacher) {
    return this.http.put(`${this.teacher_url}`, updateTeacher);
  }
  deleteUser(id: number) {
    return null;
  }
  // search(name: string): Observable<Teacher[]> {
  //   return this.getAllTeachers().pipe(map((result) => result.name === name));
  // }
}
// return Object.values(this.balanceResource).filter((item) => {
//       if (param.type && param.type !== item.category) return false;

//       return true;
