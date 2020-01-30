import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
    const students =
    [
      {
        id:1, name:'Peter Parker', matriculeNumber:'SC12A578',
        studentCourse:
        [
           {courseCode:'ENG101', creditValue:2, score:89},
           {courseCode:'PHY201', creditValue:4, score:50},
           {courseCode:'CVE100', creditValue:6, score:80},
           {courseCode:'ACC201', creditValue:6, score:56},
           {courseCode:'EDF301', creditValue:4, score:79},
           {courseCode:'ENG102', creditValue:2, score:49},
           {courseCode:'MATH101', creditValue:6, score:59}
        ]
   },
   {
       id:2, name:'Paul Joe', matriculeNumber:'ED19A123',
       studentCourse:
       [
           {courseCode:'CVE100', creditValue:4, score:89},
           {courseCode:'ENG102', creditValue:2, score:67},
           {courseCode:'BIO201', creditValue:4, score:55},
           {courseCode:'CVE100', creditValue:6, score:80},
           {courseCode:'ACC201', creditValue:6, score:56},
           {courseCode:'SOC301', creditValue:4, score:79},
           {courseCode:'ENG102', creditValue:2, score:49},
           {courseCode:'MATH201', creditValue:6, score:59}
       ] 
   },
   {
       id:3, name:'Suh Edmond', matriculeNumber:'SC17A847',
       studentCourse:
       [
           {courseCode:'CSC413', creditValue:6, score:95},
           {courseCode:'CSC301', creditValue:2, score:89},
           {courseCode:'CSC211', creditValue:6, score:66},
           {courseCode:'CSC407', creditValue:4, score:90},
           {courseCode:'MATH201', creditValue:6, score:56},
           {courseCode:'CSC413', creditValue:6, score:85},
           {courseCode:'CSC403', creditValue:2, score:86},
           {courseCode:'CSC419', creditValue:6, score:84}
       ] 
   },
   {
       id:4, name:'Njang Sharone', matriculeNumber:'CSE19A498',
       studentCourse:
       [
           {courseCode:'ENG102', creditValue:2, score:79},
           {courseCode:'ENG101', creditValue:2, score:89},
           {courseCode:'PHY205', creditValue:6, score:76},
           {courseCode:'CVE100', creditValue:6, score:80},
           {courseCode:'ACC405', creditValue:6, score:56},
           {courseCode:'CSC301', creditValue:6, score:79},
           {courseCode:'ENG102', creditValue:2, score:49},
           {courseCode:'MATH201', creditValue:6, score:59}

       ] 
   },
   {
       id:5, name:'Suh Dioline', matriculeNumber:'SC17A123',
       studentCourse:
       [
           {courseCode:'PHY303', creditValue:6, score:90},
           {courseCode:'PHY201', creditValue:2, score:89},
           {courseCode:'PHY201', creditValue:4, score:70},
           {courseCode:'CVE100', creditValue:4, score:86},
           {courseCode:'FRE201', creditValue:2, score:54},
           {courseCode:'PHY403', creditValue:4, score:80},
           {courseCode:'ENG102', creditValue:2, score:49},
           {courseCode:'PHY401', creditValue:6, score:89}
       ] 
   },
   {
       id:6, name:'Will Smith', matriculeNumber:'SC18A123',
       studentCourse:
       [
           {courseCode:'CSC303', creditValue:6, score:80},
           {courseCode:'ENG101', creditValue:2, score:99},
           {courseCode:'PHY201', creditValue:4, score:51},
           {courseCode:'CVE100', creditValue:6, score:82},
           {courseCode:'ACC201', creditValue:6, score:56},
           {courseCode:'ACC301', creditValue:6, score:75},
           {courseCode:'ENG102', creditValue:2, score:50},
           {courseCode:'MATH201', creditValue:6, score:59}
       ] 
   },
   {
       id:7, name:'Christain Jones', matriculeNumber:'SC17A123',
       studentCourse:
       [
           {courseCode:'MATH202', creditValue:6, score:70},
           {courseCode:'ENG101', creditValue:2, score:39},
           {courseCode:'PHY201', creditValue:4, score:57},
           {courseCode:'CVE100', creditValue:6, score:88},
           {courseCode:'ACC201', creditValue:6, score:56},
           {courseCode:'CSC314', creditValue:6, score:79},
           {courseCode:'ENG102', creditValue:2, score:50},
           {courseCode:'MATH202', creditValue:6, score:59}
       ] 
   },
   {
       id:8, name:'Peter Bery', matriculeNumber:'SC18A223',
       studentCourse:
       [
           {courseCode:'CSC403', creditValue:6, score:50},
           {courseCode:'ENG101', creditValue:2, score:90},
           {courseCode:'PHY201', creditValue:4, score:54},
           {courseCode:'CVE100', creditValue:6, score:89},
           {courseCode:'ACC201', creditValue:6, score:56},
           {courseCode:'LIN301', creditValue:4, score:79},
           {courseCode:'ENG102', creditValue:2, score:45},
           {courseCode:'MATH401', creditValue:6, score:59}
       ] 
   },
   {
       id:9, name:'Briyan Smith', matriculeNumber:'SC18A678',
       studentCourse:
       [
           {courseCode:'CSC305', creditValue:6, score:78},
           {courseCode:'ENG101', creditValue:2, score:89},
           {courseCode:'PHY201', creditValue:4, score:50},
           {courseCode:'CVE100', creditValue:6, score:80},
           {courseCode:'CSC305', creditValue:6, score:56},
           {courseCode:'CSC301', creditValue:4, score:70},
           {courseCode:'ENG102', creditValue:2, score:67},
           {courseCode:'MATH202', creditValue:6, score:59}
       ] 
   },
   {
       id:10, name:'Bety Smith', matriculeNumber:'SC10A678',
       studentCourse:
       [
           {courseCode:'MATH305', creditValue:6, score:75},
           {courseCode:'ENG101', creditValue:2, score:99},
           {courseCode:'PHY201', creditValue:4, score:50},
           {courseCode:'CVE100', creditValue:6, score:84},
           {courseCode:'PHY202', creditValue:6, score:68},
           {courseCode:'PHY301', creditValue:4, score:34},
           {courseCode:'ENG102', creditValue:2, score:49},
           {courseCode:'PHY403', creditValue:6, score:88}
       ] 
   },
   {
       id:11, name:'Shaw Paul', matriculeNumber:'SC16B178',
       studentCourse:
       [
           {courseCode:'CSC311', creditValue:6, score:72},
           {courseCode:'ENG101', creditValue:2, score:59},
           {courseCode:'PHY201', creditValue:4, score:60},
           {courseCode:'CVE100', creditValue:6, score:80},
           {courseCode:'MATH201', creditValue:6, score:78},
           {courseCode:'MATH301', creditValue:4, score:79},
           {courseCode:'ENG102', creditValue:2, score:49},
           {courseCode:'MATH202', creditValue:6, score:39}
       ] 
   },
   {
       id:12, name:'George Kean', matriculeNumber:'SC15A278',
       studentCourse:
       [
           {courseCode:'PHY305', creditValue:6, score:78},
           {courseCode:'ENG101', creditValue:2, score:89},
           {courseCode:'CHE201', creditValue:4, score:55},
           {courseCode:'CVE100', creditValue:6, score:80},
           {courseCode:'CHE301', creditValue:6, score:78},
           {courseCode:'CHE303', creditValue:4, score:79},
           {courseCode:'ENG102', creditValue:2, score:49},
           {courseCode:'MATH211', creditValue:6, score:59}
       ] 
   },
   {
       id:13, name:'Hosea Nico', matriculeNumber:'SC14A378',
       studentCourse:
       [
           {courseCode:'ZOO305', creditValue:6, score:45},
           {courseCode:'ENG101', creditValue:2, score:89},
           {courseCode:'MIC201', creditValue:4, score:60},
           {courseCode:'CVE100', creditValue:6, score:70},
           {courseCode:'CSC209', creditValue:6, score:56},
           {courseCode:'ZOO301', creditValue:4, score:79},
           {courseCode:'ENG102', creditValue:2, score:49},
           {courseCode:'MATH207', creditValue:6, score:79}
       ] 
   },
   {
       id:14, name:'Townsend Bery', matriculeNumber:'SC12A578',
       studentCourse:
       [
           {courseCode:'PHY305', creditValue:6, score:58},
           {courseCode:'ENG101', creditValue:2, score:89},
           {courseCode:'PHY201', creditValue:4, score:54},
           {courseCode:'CVE100', creditValue:6, score:86},
           {courseCode:'CSC201', creditValue:6, score:56},
           {courseCode:'EDF301', creditValue:4, score:79},
           {courseCode:'ENG102', creditValue:2, score:56},
           {courseCode:'MATH202', creditValue:6, score:59}
       ]
      }
    ];
    return {students};
  }

  constructor() { }
}
