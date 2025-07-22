import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

   {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    {path:'Admin', component:AdminComponent},
    {path:'dashboard', component:DashboardComponent},

    {path:'verification', loadChildren: () =>
      import('./verification/verification.module').then(m => m.VerificationModule)},

    {path:'authorization', loadChildren: () =>
      import('./authorization/authorization.module').then(m => m.AuthorizationModule)}
];
