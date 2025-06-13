import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { CreateNewStudentComponent } from './create-new-student/create-new-student.component';
import { ShowAllStudentsComponent } from './show-all-students/show-all-students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateNewStudentComponent,
    ShowAllStudentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
