import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../MODELS/course.model';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private subject_url = 'http://localhost:8080/classroom/v1/api/subjectLists';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.subject_url}`);
  }

  getById(id: number) {
    return null;
  }
  add(subject: Subject) {
    return this.http.post(`${this.subject_url}`, subject);
  }
  update(updateSubject: Subject) {
    return this.http.put(`${this.subject_url}`, updateSubject);
  }
  delete(id: number) {
    return null;
  }
}
