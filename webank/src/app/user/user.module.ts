import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
