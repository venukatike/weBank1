import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [

   {path:'', redirectTo:'/user', pathMatch:'full'},
    {path:'Admin', component:AdminComponent},

    {path:'user', loadChildren: () =>
      import('./user/user.module').then(m => m.UserModule)}
];
