import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{path:"",redirectTo:"/admin/profile",pathMatch:"full"},
{path:"admin",component:AdmindashboardComponent,children:[{path:"profile",component:ProfileComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
