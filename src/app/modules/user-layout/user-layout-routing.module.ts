import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutMainComponent } from './pages/user-layout-main/user-layout-main.component';
import { UserLayoutNavComponent } from './pages/user-layout-nav/user-layout-nav.component';

const routes: Routes = [
  // {
  //   path: 'user',
  //   component: UserLayoutMainComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
