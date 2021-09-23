import { Injectable } from '@angular/core';
import { UserType } from '../MODELS/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private userService: UserService) {}

  isAdmin(type: UserType): boolean {
    return false;
  }
}
