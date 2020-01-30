import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
   
})
export class StudentDetailsComponent implements OnInit {


      student:Student;
     
      creditAtt:number = 0;
      creditEarn:number = 0;
      totalPoint:number = 0;
       
      constructor(private studentService:StudentService, private route:ActivatedRoute, private location:Location) { 
         
      }

      ngOnInit() {
        this.setRegisteredStudent();
        //this.getStudentGrades();
         
      }

      //set the student variable to the current student using the id
      setRegisteredStudent():void {
        const studentId =+ this.route.snapshot.paramMap.get('id');
        this.studentService.getStudent(studentId).subscribe(student => this.student = student);
      }
       
       

      letterGrade(score:number):string{
            if(score >= 80  && score <= 100){
            return("A");
          }
          else if(score >= 70 && score  <= 79){
            return("B+");
          }
          else if(score >= 60 && score  <= 69){
            return("B");
          }
          else if(score >= 55 && score  <= 59){
            return("C+");
          }
          else if(score >= 50 && score  <= 54){
            return("C");
          }
          else if(score >= 45 && score  <= 49){
            return("D+");
          }
          else if(score >= 40 && score  <= 44){
            return("D");
          }
          else if(score >= 0 && score  <= 39){
            return("F");
          }
      }

      gradePoint(score:number, creditValue:number):number{
        let point:number = 0;
        let grade:string = this.letterGrade(score);
        switch(grade){
          case "A":
            point = 4.0;
             
            break;
          case "B+":
             
            point = 3.5;
            break;
          case "B":
             
            point = 3.0;
            break;
          case "C+":
             
            point = 2.5;
            break;
          case "C":
             
            point = 2.0;
            break;
          case "D+":
            point = 1.5;
            break;
          case "D":
            point= 1;
            break;
          default:
             point = 0.0;

        }
        return point;
      }

      coursePoint(creditValue:number, score:number){
        let point = this.gradePoint(score, creditValue);
        this.setCreditEarned(score, creditValue);
        let earnPoint:number = creditValue * point;
        this.totalPoint = this.totalPoint + earnPoint;
        this.creditAtt = this.creditAtt + creditValue;
        return earnPoint;
        //this.creditAtt = creditValue + this.creditAtt;
         
      }

      computeGpa(){
        let gpa:number  = this.totalPoint / this.creditAtt;
        return gpa.toFixed(2);
      }

      setCreditEarned(score:number, creditValue:number){
        let point = this.gradePoint(score, creditValue)
        if(score >= 50){
          this.creditEarn += creditValue;
        }
      }

      goBack(){
        return this.location.back();
      }
      
}
