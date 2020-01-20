import { Component, OnInit } from '@angular/core';
import { RegisteredStudent } from '../registered-students';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  registeredStudent:Student[];

  constructor(private studentService:StudentService, private messageService: MessageService) { }

  ngOnInit() {
    this.setRegisteredStudentFromService();
  }

  setRegisteredStudentFromService():void {
    this.messageService.addMessage("Student Service Successfully Fetched all Regstered Students");
    this.studentService.getRegisteredStudent().subscribe(student => this.registeredStudent = student);
  }

}
