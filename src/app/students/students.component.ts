import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
     

      student:Student;
      registeredStudent:Student[];

      constructor(private studentService:StudentService, private location:Location) { }

      ngOnInit() {
      
        this.setRegisteredStudentFromService();
         
      }

      setRegisteredStudentFromService():void {
        this.studentService.getRegisteredStudent().subscribe(student => this.registeredStudent = student);
      }

       
     goBack(){
       return this.location.back();
     }
}
