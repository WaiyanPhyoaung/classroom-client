import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../MODELS/user.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private student_url = 'http://localhost:8080/classroom/v1/api/studentLists';
  registrationNumber = 1000;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.student_url}`);
  }

  getById(id: number) {
    return null;
  }
  add(student: Student): Observable<any> {
    student.registrationNumber = this.getRegistrationNumber();
    student.type = 'STUDENT';
    return this.http.post(`${this.student_url}`, student);
  }
  update(updateStudent: Student) {
    return this.http.put(`${this.student_url}`, updateStudent);
  }
  delete(id: number) {
    return null;
  }
  getRegistrationNumber(): number {
    return ++this.registrationNumber;
  }
}
