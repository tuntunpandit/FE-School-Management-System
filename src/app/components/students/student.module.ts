// src/app/student/student.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    StudentDashboardComponent,
    // Other student components
  ],
  imports: [CommonModule, StudentRoutingModule],
})
export class StudentModule {}
