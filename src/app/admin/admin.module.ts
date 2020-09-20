import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../material/material.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';



@NgModule({
  declarations: [ProfileComponent,AdmindashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
