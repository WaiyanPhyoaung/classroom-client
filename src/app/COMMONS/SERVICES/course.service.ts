import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../MODELS/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private course_url = 'http://localhost:8080/classroom/v1/api/courseLists';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.course_url}`);
  }

  add(course: Course) {
    return this.http.post(`${this.course_url}`, course);
  }
  update(updateCourse: Course) {
    return this.http.put(`${this.course_url}`, updateCourse);
  }
  delete(id: number) {
    return null;
  }
}
