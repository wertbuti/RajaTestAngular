import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { UserLayoutMainComponent } from './pages/user-layout-main/user-layout-main.component';
import { UserLayoutNavComponent } from './pages/user-layout-nav/user-layout-nav.component';
import { UserLayoutFooterComponent } from './pages/user-layout-footer/user-layout-footer.component';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    UserLayoutMainComponent,
    UserLayoutNavComponent,
    UserLayoutFooterComponent
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    MatButtonModule, MatMenuModule
  ]
})
export class UserLayoutModule { }
