// src/app/teacher/teacher-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherGuard } from '../guards/teacher.guard';

const routes: Routes = [
  {
    path: 'teacher-dashboard',
    component: TeacherDashboardComponent,
    canActivate: [TeacherGuard],
  },
  // Other teacher routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
