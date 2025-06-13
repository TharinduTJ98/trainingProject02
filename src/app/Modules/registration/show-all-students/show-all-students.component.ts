import { Component } from '@angular/core';
interface Student {
  id: number;
  name: string;
  email: string;
  phone?: string;
  course: string;
}
@Component({
  selector: 'app-show-all-students',
  templateUrl: './show-all-students.component.html',
  styleUrls: ['./show-all-students.component.scss']
})
export class ShowAllStudentsComponent {
  students: Student[] = [
    {id:1, name:'ABC', email:'abc@gmail.com', phone:'077-6284276', course:'Computer Science'},
    {id:2, name:'DEF', email:'def@gmail.com', phone:'077-4579852', course:'Mathematics'},
    {id:3, name:'GHI', email:'ghi@gmail.com', phone:'077-4793584', course:'Science'},
    {id:4, name:'JKL', email:'jkl@gmail.com', phone:'077-1498752', course:'Computer Science'},
  ];


}
