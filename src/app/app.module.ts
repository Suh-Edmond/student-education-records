import { HttpClientModule }    from '@angular/common/http';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { InMemoryDataService } from './in-memory-data.service';
 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentsComponent,
    StudentDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) 
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
