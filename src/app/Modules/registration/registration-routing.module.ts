import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewStudentComponent } from './create-new-student/create-new-student.component';
import { ShowAllStudentsComponent } from './show-all-students/show-all-students.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-new-student',
    pathMatch: 'full'
  },
  {
    path: 'add-new-student',
    component: CreateNewStudentComponent
  },
  {
    path: 'view-all-students',
    component: ShowAllStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
