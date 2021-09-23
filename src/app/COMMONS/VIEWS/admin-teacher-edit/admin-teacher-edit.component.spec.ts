import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherEditComponent } from './admin-teacher-edit.component';

describe('AdminTeacherEditComponent', () => {
  let component: AdminTeacherEditComponent;
  let fixture: ComponentFixture<AdminTeacherEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTeacherEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeacherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
