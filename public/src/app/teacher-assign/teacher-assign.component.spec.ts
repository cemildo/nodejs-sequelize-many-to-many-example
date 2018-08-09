import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAssignComponent } from './teacher-assign.component';

describe('TeacherAssignComponent', () => {
  let component: TeacherAssignComponent;
  let fixture: ComponentFixture<TeacherAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
