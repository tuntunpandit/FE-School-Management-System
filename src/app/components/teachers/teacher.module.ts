// src/app/teacher/teacher.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

@NgModule({
  declarations: [
    TeacherDashboardComponent,
    // Other teacher components
  ],
  imports: [CommonModule, TeacherRoutingModule],
})
export class TeacherModule {}
