import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../app.routes';
import { verificationRoutes } from './verification-routes.module';
import { VerificationComponent } from './verification.component';
import { DashboardComponent } from '../dashboard/dashboard.component';



@NgModule({
  declarations: [],
  imports: [verificationRoutes,
    CommonModule,DashboardComponent
  ]
})
export class VerificationModule { }
