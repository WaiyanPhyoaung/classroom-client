export type UserType = 'ADMIN' | 'TEACHER' | 'STUDENT' | '' | undefined;

export class User {
  id?: number;
  name?: string;
  emailAddress?: string;
  phoneNumber?: string;
  password?: string;
  type?: UserType;
}

export class Student extends User {
  registrationNumber?: number;
}
export class Teacher extends User {
  education?: string;
}
