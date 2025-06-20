import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewStudentComponent } from './create-new-student.component';

describe('CreateNewStudentComponent', () => {
  let component: CreateNewStudentComponent;
  let fixture: ComponentFixture<CreateNewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
