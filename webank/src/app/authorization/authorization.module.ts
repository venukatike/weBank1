import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes:Routes=[
  {path:'',component:AuthorizationComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule,DashboardComponent,RouterModule, MatCardModule, 
    MatButtonModule
  ],
})
export class AuthorizationModule { }
