import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CertificateDTO } from '../../data/schemas/certificateDTO';
import { CertificateService } from '../../data/services/certificate.service';
import { PersonnelSettings } from '../../personnel.settings';

@Component({
  selector: 'app-certificate-edit',
  templateUrl: './certificate-edit.component.html',
  styleUrls: ['./certificate-edit.component.css']
})
export class CertificateEditComponent implements OnInit {

  // #region variables------------------------------------
  get certificateIndexUrl() { return PersonnelSettings.CERTIFICATE_INDEX_URL; }

  item: CertificateDTO = {} as CertificateDTO;

  form = new UntypedFormGroup({
    idControl: new FormControl('', [Validators.required]),
    nameControl: new FormControl('', [Validators.required]),
  });

  get idControl() { return this.form.get('idControl'); }
  get nameControl() { return this.form.get('nameControl'); }
  // #endregion

  // #region hooks----------------------------------------
  constructor(private certificateService: CertificateService, private route: ActivatedRoute
    , private router: Router) {
  }
  ngOnInit(): void {
    this.getData();
  }
  // #endregion

  // #region functions------------------------------------
  getData() {
    this.route.params.pipe(
      switchMap((params: Params) => this.certificateService.getById(params['id']))
    ).subscribe(result => {
      this.item = result;
      this.loadFormData();
    });
  }
  loadFormData() {
    this.idControl?.setValue(this.item.Id);
    this.nameControl?.setValue(this.item.Name);
  }
  onSubmit() {
    this.sendData();

  }
  sendData() {
    let certificateDTO: CertificateDTO = {
      Id: this.idControl?.value,
      Name: this.nameControl?.value,
    }
    this.certificateService.edit(certificateDTO).subscribe(result => {
      this.router.navigate([this.certificateIndexUrl]);
    });
  }
  // #endregion

}
