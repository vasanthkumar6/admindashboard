import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatNavlist} from '@angular/material/list';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';



const MaterialComponents=[
 
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule
  
  
]
@NgModule({
  imports: [MaterialComponents ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
