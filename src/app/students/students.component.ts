import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
     

      student:Student;
      registeredStudent:Student[];

      constructor(private studentService:StudentService) { }

      ngOnInit() {
        this.setRegisteredStudentFromService();
         
      }

      setRegisteredStudentFromService():void {
        this.studentService.getRegisteredStudent().subscribe(student => this.registeredStudent = student);
      }

       

}
