import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

   {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    {path:'Admin', component:AdminComponent},
    {path:'dashboard', component:DashboardComponent},

    {path:'user', loadChildren: () =>
      import('./user/user.module').then(m => m.UserModule)}
];
