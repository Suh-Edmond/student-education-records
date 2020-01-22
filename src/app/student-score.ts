import { Student } from './student';
import { StudentService } from './student.service';
import { ActivatedRoute } from '@angular/router';

 

export class StudentScore 
{
    
    grades:string[] = [];
    student:Student;
    regStudentScore: number[];

    scores:number[] = [];
   
    constructor(private studentService:StudentService, private route:ActivatedRoute){}

    setRegisteredStudent():void {
        const studentId =+ this.route.snapshot.paramMap.get('id');
        this.studentService.getStudent(studentId).subscribe(student => this.student = student);
      }

    getScore():number[] {
        this.setRegisteredStudent();
        for(let course of this.student.studentCourse){
              this.scores.push(course.score);
        }
        return this.scores;
      }
 
      setGrades():string[]
      {
        this.regStudentScore = this.getScore();
        for(let score of  this.regStudentScore){
            if(score >= 80  && score == 100){
                this.grades.push("A");
            }
            else if(score >= 70 && score  <= 79){
                this.grades.push("B+");
            }
            else if(score >= 60 && score  <= 69){
                this.grades.push("B");
            }
            else if(score >= 55 && score  <= 59){
                this.grades.push("C+");
            }
            else if(score >= 50 && score  <= 54){
                this.grades.push("C");
            }
            else if(score >= 45 && score  <= 49){
                this.grades.push("D+");
            }
            else if(score >= 40 && score  <= 44){
                this.grades.push("D");
            }
            else if(score >= 0 && score  <= 39){
                this.grades.push("F");
            }
  
        }
        return  (this.grades);
                 
      }

    

   
}