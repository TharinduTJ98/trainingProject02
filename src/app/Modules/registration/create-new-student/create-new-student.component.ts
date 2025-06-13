import { Component } from '@angular/core';
import { StudentService } from '../Service/student.service';
import { Student } from '../Modules/Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-student',
  templateUrl: './create-new-student.component.html',
  styleUrls: ['./create-new-student.component.scss']
})
export class CreateNewStudentComponent {
  student: Student ={
    id :0,
    name: '',
    email: '',
    phone: '',
  }
  constructor(private studentService: StudentService, private router: Router){}

  onsubmit(): void{
    this.studentService.addStudent(this.student);
    this.router.navigate(['/dashboard/reg/view-all-students']);
    console.log("Student data", this.student)
  }

}
