import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [
   {path:'', redirectTo:'/dashboard', pathMatch:'full'},
   {path:'dashboard', component:DashboardComponent},
   {path:'registered-students', component:StudentsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
