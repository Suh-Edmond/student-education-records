import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { Student } from './student';
import { RegisteredStudent } from './registered-students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

        constructor() { }
        //gets all registered students
        getRegisteredStudent():Observable<Student[]> {
            return of(RegisteredStudent);
        }
        //gets a specific student via the id
        getStudent(studentId:number):Observable<Student>
        {
           return of(RegisteredStudent.find(student => student.id === studentId));
        }


}
