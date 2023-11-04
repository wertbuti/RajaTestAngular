import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnelIndexComponent } from './modules/personnel/pages/personnel-index/personnel-index.component';
import { UserLayoutMainComponent } from './modules/user-layout/pages/user-layout-main/user-layout-main.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserLayoutMainComponent,
    loadChildren: () => import('./modules/personnel/personnel.module').then(m => m.PersonnelModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
