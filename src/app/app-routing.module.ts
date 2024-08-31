import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { MainGuard } from './guards/main.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    canActivate: [MainGuard],
    children: [
      // { path: 'dashboard', component: DashboardComponent }, // Replace with actual component
      // { path: 'students', component: StudentsComponent }, // Replace with actual component
      // { path: 'teachers', component: TeachersComponent }, // Replace with actual component
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard], // Protect auth routes if logged in
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
