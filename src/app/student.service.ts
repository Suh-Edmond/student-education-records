import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { Student } from './student';
import { RegisteredStudent } from './registered-students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getRegisteredStudent():Observable<Student[]> {
       return of(RegisteredStudent);
  }
  



}
