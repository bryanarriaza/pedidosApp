import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard.routing';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: dashboardRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class DashboardRoutingModule {}
