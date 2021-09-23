import { Teacher } from './user.model';

export interface Course {
  id: number;
  name: String;
  fee: number;
  startDate: Date;
  duration: number;
  subjects: Subject[];
  teacher: Teacher;
  level: String;
}
export interface Subject {
  id: number;
  name: string;
}
