// src/app/student/student-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentGuard } from '../guards/student.guard';

const routes: Routes = [
  {
    path: 'student-dashboard',
    component: StudentDashboardComponent,
    canActivate: [StudentGuard],
  },
  // Other student routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
