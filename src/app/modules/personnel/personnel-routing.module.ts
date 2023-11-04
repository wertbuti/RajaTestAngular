import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnelLayoutComponent } from './layouts/personnel-layout/personnel-layout.component';
import { CertificateDeleteComponent } from './pages/certificate-delete/certificate-delete.component';
import { CertificateDetailsComponent } from './pages/certificate-details/certificate-details.component';
import { CertificateEditComponent } from './pages/certificate-edit/certificate-edit.component';
import { CertificateIndexComponent } from './pages/certificate-index/certificate-index.component';
import { CertificateNewComponent } from './pages/certificate-new/certificate-new.component';
import { PersonnelCertificateDeleteComponent } from './pages/personnel-certificate-delete/personnel-certificate-delete.component';
import { PersonnelCertificateDetailsComponent } from './pages/personnel-certificate-details/personnel-certificate-details.component';
import { PersonnelCertificateEditComponent } from './pages/personnel-certificate-edit/personnel-certificate-edit.component';
import { PersonnelCertificateIndexComponent } from './pages/personnel-certificate-index/personnel-certificate-index.component';
import { PersonnelCertificateNewComponent } from './pages/personnel-certificate-new/personnel-certificate-new.component';
import { PersonnelDeleteComponent } from './pages/personnel-delete/personnel-delete.component';
import { PersonnelDetailsComponent } from './pages/personnel-details/personnel-details.component';
import { PersonnelEditComponent } from './pages/personnel-edit/personnel-edit.component';
import { PersonnelIndexComponent } from './pages/personnel-index/personnel-index.component';
import { PersonnelNewComponent } from './pages/personnel-new/personnel-new.component';

const routes: Routes = [
  {
    path:'personnel',
    component:PersonnelLayoutComponent,
    children:[
      {
        path:'',
        component: PersonnelIndexComponent
      },
      {
        path:'details/:id',
        component:PersonnelDetailsComponent
      },
      {
        path: 'new',
        component:PersonnelNewComponent
      },
      {
        path:'edit/:id',
        component:PersonnelEditComponent
      },
      {
        path:'delete/:id',
        component:PersonnelDeleteComponent
      },
      // ----------------------------------
      {
        path:'personnelCertificate/:personnelId',
        component:PersonnelCertificateIndexComponent
      },
      {
        path:'personnelCertificate/details/:id',
        component:PersonnelCertificateDetailsComponent
      },
      {
        path: 'personnelCertificate/new/:personnelId',
        component:PersonnelCertificateNewComponent
      },
      {
        path:'personnelCertificate/edit/:id',
        component:PersonnelCertificateEditComponent
      },
      {
        path:'personnelCertificate/delete/:id',
        component:PersonnelCertificateDeleteComponent
      },
      // ----------------------------------
      {
        path:'certificate',
        component: CertificateIndexComponent
      },
      {
        path:'certificate/details/:id',
        component:CertificateDetailsComponent
      },
      {
        path: 'certificate/new',
        component:CertificateNewComponent
      },
      {
        path:'certificate/edit/:id',
        component:CertificateEditComponent
      },
      {
        path:'certificate/delete/:id',
        component:CertificateDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnelRoutingModule { }
