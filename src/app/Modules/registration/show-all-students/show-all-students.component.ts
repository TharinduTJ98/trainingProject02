import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';
import { Student } from '../Model/Student';
@Component({
  selector: 'app-show-all-students',
  templateUrl: './show-all-students.component.html',
  styleUrls: ['./show-all-students.component.scss']
})
export class ShowAllStudentsComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService){
  }
  ngOnInit(): void {
    this.studentService.students$.subscribe(data => {
      this.students = data;
    })
  }




}
