import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CertificateDTO } from '../../data/schemas/certificateDTO';
import { PersonnelCertificateDTO, PersonnelCertificateInsertDTO } from '../../data/schemas/PersonnelCertificateDTO';
import { CertificateService } from '../../data/services/certificate.service';
import { PersonnelCertificateService } from '../../data/services/personnel-certificate.service';
import { PersonnelSettings } from '../../personnel.settings';

@Component({
  selector: 'app-personnel-certificate-edit',
  templateUrl: './personnel-certificate-edit.component.html',
  styleUrls: ['./personnel-certificate-edit.component.css']
})
export class PersonnelCertificateEditComponent implements OnInit {

  // #region variables------------------------------------
  get personnelCertificateIndexUrl() { return PersonnelSettings.PERSONNELCERTIFICATE_INDEX_URL; }

  item: PersonnelCertificateDTO = {} as PersonnelCertificateDTO;

  form = new UntypedFormGroup({
    idControl: new FormControl('', [Validators.required]),
    personnelIdControl: new FormControl('', [Validators.required]),
    // certificateIdControl: new FormControl('', [Validators.required]),
    yearCatchControl: new FormControl('', [Validators.required]),
    gpaControl: new FormControl('',[Validators.required])
  });

  get idControl() { return this.form.get('idControl'); }
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
  ngOnInit(): void {
    this.getData();
    this.getCertificates();
  }
  // #endregion

  // #region functions------------------------------------
  readPersonnelId() {
    this.personnelId = this.item.PersonnelId;
  }
  getCertificates() {
    this.certificateService.getAll()
      .subscribe(result => {
        this.certificateDTOs = result;
        
      });
  }
  getData() {
    this.route.params.pipe(
      switchMap((params: Params) => this.personnelCertificateService.getById(params['id']))
    ).subscribe(result => {
      this.item = result;
      this.loadFormData();
      this.readPersonnelId();
    });
  }
  loadFormData() {
    this.idControl?.setValue(this.item.Id);
    this.personnelIdControl?.setValue(this.item.PersonnelId);
    // this.certificateIdControl?.setValue(this.item.CertificateId);
    this.certificateId = this.item.CertificateId;
    this.yearCatchControl?.patchValue(this.item.YearCatch);
    this.gpaControl?.patchValue(this.item.Gpa);
  }
  onSubmit() {
    this.sendData();

  }
  sendData() {
    let personnelCertificateInsertDTO: PersonnelCertificateInsertDTO = {
      Id: this.idControl?.value,
      PersonnelId: this.personnelIdControl?.value,
      // CertificateId: this.certificateIdControl?.value,
      CertificateId: this.certificateId,
      YearCatch: this.yearCatchControl?.value,
      Gpa: this.gpaControl?.value
    }
    this.personnelCertificateService.edit(personnelCertificateInsertDTO).subscribe(result => {
      this.router.navigate([this.personnelCertificateIndexUrl,this.personnelId]);
    });
  }
  // #endregion

}
