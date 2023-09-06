import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Core/guards/auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouteConstants } from './Core/constants/app-constants';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'tools-management',
        loadChildren: () => import('./tools-management/tools-management.module').then(m => m.ToolsManagementModule)
      },
      {
        path: 'users-management',
        loadChildren: () => import('./users-management/users-management.module').then(m => m.UsersManagementModule)
      },
      {
        path: RouteConstants.toolOutput,
        loadChildren: () => import('./tools-output/tool-output.module').then(m => m.ToolOutputModule)
      },
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'general-settings',
        loadChildren: () => import('./general-settings/general-settings.module').then(m => m.GeneralSettingsModule)
      },
      {
        path: 'work-orders',
        loadChildren: () => import('./work-orders/work-orders.module').then(m => m.WorkOrderstModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
