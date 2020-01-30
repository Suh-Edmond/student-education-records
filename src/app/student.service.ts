import { Injectable } from '@angular/core';
import { Observable , of, pipe} from 'rxjs';
import { Student } from './student';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
        log: any;

        constructor(private http : HttpClient) { }
        private studentsUrl = "api/students"
        //gets all registered students
        getRegisteredStudent():Observable<Student[]>
        {
            return this.http.get<Student[]>(this.studentsUrl)
            .pipe( 
              catchError(this.handleError<Student[]>('getRegisteredStudent', []))
            );       
        
        
          }
   
        //gets a specific student via the id
        getStudent(studentId:number):Observable<Student>
        {
           const studentUrl = `${this.studentsUrl}/${studentId}`;
           return this.http.get<Student>(studentUrl).pipe(
             catchError(this.handleError(`getStudent stduentId = ${studentId}`))
           );
        }


        handleError<T>(operation = 'operation', result?: T): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any>
        {
          return (error:any ):Observable<T> =>{
            console.error(error);
            this.log(`${operation} Failed: ${error.message}`);
            return of(result as T);
          };
        }

        

        


}
