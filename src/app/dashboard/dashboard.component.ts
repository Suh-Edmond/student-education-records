import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  registeredStudent1:Student[];//get the first 2 registered students
  registeredStudent2:Student[];//get the first 2 registered students

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.setRegisteredStudentFromService1();
    this.setRegisteredStudentFromService2();
  }

  setRegisteredStudentFromService1():void {
   this.studentService.getRegisteredStudent().subscribe(student => this.registeredStudent1 = student.slice(1,3));
  }

  setRegisteredStudentFromService2():void {
    this.studentService.getRegisteredStudent().subscribe(student => this.registeredStudent2 = student.slice(3,5));
   }
  
       

}
