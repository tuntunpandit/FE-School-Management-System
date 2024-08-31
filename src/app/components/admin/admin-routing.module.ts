import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
// import { AdminGuard } from 'src/app/guards/admin.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    // canActivate: [AdminGuard],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
