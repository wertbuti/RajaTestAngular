import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { PersonnelCertificateDTO, PersonnelCertificateInsertDTO } from '../../data/schemas/PersonnelCertificateDTO';
import { PersonnelCertificateService } from '../../data/services/personnel-certificate.service';
import { PersonnelSettings } from '../../personnel.settings';
import {MatSelectModule} from '@angular/material/select'; 
import { CertificateService } from '../../data/services/certificate.service';
import { CertificateDTO } from '../../data/schemas/certificateDTO';

@Component({
  selector: 'app-personnel-certificate-new',
  templateUrl: './personnel-certificate-new.component.html',
  styleUrls: ['./personnel-certificate-new.component.css']
})
export class PersonnelCertificateNewComponent  implements OnInit{

  // #region variables------------------------------------
  get personnelCertificateIndexUrl() { return PersonnelSettings.PERSONNELCERTIFICATE_INDEX_URL; }

  form = new UntypedFormGroup({
    // personnelIdControl: new FormControl('', [Validators.required]),
    // certificateIdControl: new FormControl('', [Validators.required]),
    yearCatchControl: new FormControl('', [Validators.required]),
    gpaControl: new FormControl('',[Validators.required])
  });

  get personnelIdControl() { return this.form.get('personnelIdControl'); }
  // get certificateIdControl() { return this.form.get('certificateIdControl'); }
  get yearCatchControl() { return this.form.get('yearCatchControl'); }
  get gpaControl() { return this.form.get('gpaControl'); }

  personnelId = 0;
  certificateId: number=0;
  certificateDTOs!: CertificateDTO[];
  // #endregion

  // #region hooks----------------------------------------
  constructor(private personnelCertificateService: PersonnelCertificateService, private route: ActivatedRoute
    , private router: Router,private certificateService: CertificateService) {
  }
  ngOnInit() {
    this.readPersonnelId();
    this.getCertificates();
  }
  // #endregion

  // #region functions------------------------------------

  readPersonnelId() {
    this.route.params.subscribe(params => {
      this.personnelId = params['personnelId'];
    });
  }
  onSubmit() {
    this.sendData();
  }

  getCertificates() {
    this.certificateService.getAll()
      .subscribe(result => {
        this.certificateDTOs = result;
        
      });
  }

  sendData() {
    let personnelCertificateInsertDTO: PersonnelCertificateInsertDTO = {
      Id: 0,
      PersonnelId: this.personnelId,
      // CertificateId: this.certificateIdControl?.value,
      CertificateId: this.certificateId,
      YearCatch: this.yearCatchControl?.value,
      Gpa: this.gpaControl?.value
    }
    this.personnelCertificateService.create(personnelCertificateInsertDTO).pipe(
      catchError(error=> {throw error;})
    ).subscribe(result => {
      this.router.navigate([this.personnelCertificateIndexUrl,this.personnelId]);
    });
  }
  // #endregion

}
