import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { CertificateDTO } from '../../data/schemas/certificateDTO';
import { CertificateService } from '../../data/services/certificate.service';
import {PersonnelSettings } from '../../personnel.settings';

@Component({
  selector: 'app-certificate-new',
  templateUrl: './certificate-new.component.html',
  styleUrls: ['./certificate-new.component.css']
})
export class CertificateNewComponent {

  // #region variables------------------------------------
  get certificateIndexUrl() { return PersonnelSettings.CERTIFICATE_INDEX_URL; }

  form = new UntypedFormGroup({
    nameControl: new FormControl('', [Validators.required]),
  });

  get nameControl() { return this.form.get('nameControl'); }
  // #endregion

  // #region hooks----------------------------------------
  constructor(private certificateService: CertificateService, private route: ActivatedRoute
    , private router: Router) {
  }
  ngOnInit(): void {

  }
  // #endregion

  // #region functions------------------------------------
  onSubmit() {
    this.sendData();
  }

  sendData() {
    let certificateDTO: CertificateDTO = {
      Id: 0,
      Name: this.nameControl?.value
    }
    this.certificateService.create(certificateDTO).pipe(
      catchError(error=> {throw error;})
    ).subscribe(result => {
      this.router.navigate([this.certificateIndexUrl]);
    });
  }
  // #endregion

}
