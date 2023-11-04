import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '@app/shared/shared.module';

import { PersonnelRoutingModule } from './personnel-routing.module';
import { PersonnelIndexComponent } from './pages/personnel-index/personnel-index.component';
import { PersonnelNewComponent } from './pages/personnel-new/personnel-new.component';
import { PersonnelLayoutComponent } from './layouts/personnel-layout/personnel-layout.component';
import { SharedModule } from '@app/shared/shared/shared.module';
import { PersonnelDetailsComponent } from './pages/personnel-details/personnel-details.component';
import { PersonnelEditComponent } from './pages/personnel-edit/personnel-edit.component';
import { PersonnelDeleteComponent } from './pages/personnel-delete/personnel-delete.component';
import { PersonnelCertificateDeleteComponent } from './pages/personnel-certificate-delete/personnel-certificate-delete.component';
import { PersonnelCertificateIndexComponent } from './pages/personnel-certificate-index/personnel-certificate-index.component';
import { PersonnelCertificateNewComponent } from './pages/personnel-certificate-new/personnel-certificate-new.component';
import { PersonnelCertificateDetailsComponent } from './pages/personnel-certificate-details/personnel-certificate-details.component';
import { PersonnelCertificateEditComponent } from './pages/personnel-certificate-edit/personnel-certificate-edit.component';
import { CertificateEditComponent } from './pages/certificate-edit/certificate-edit.component';
import { CertificateIndexComponent } from './pages/certificate-index/certificate-index.component';
import { CertificateNewComponent } from './pages/certificate-new/certificate-new.component';
import { CertificateDeleteComponent } from './pages/certificate-delete/certificate-delete.component';
import { CertificateDetailsComponent } from './pages/certificate-details/certificate-details.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonnelIndexComponent,
    PersonnelNewComponent,
    PersonnelLayoutComponent,
    PersonnelDetailsComponent,
    PersonnelEditComponent,
    PersonnelDeleteComponent,
    PersonnelCertificateDeleteComponent,
    PersonnelCertificateIndexComponent,
    PersonnelCertificateNewComponent,
    PersonnelCertificateDetailsComponent,
    PersonnelCertificateEditComponent,
    CertificateEditComponent,
    CertificateIndexComponent,
    CertificateNewComponent,
    CertificateDeleteComponent,
    CertificateDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonnelRoutingModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [PersonnelIndexComponent,PersonnelNewComponent],
})
export class PersonnelModule { }
