import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PersonnelDTO } from '../../data/schemas/personnelDTO';
import { PersonnelService } from '../../data/services/personnel.service';
import { PersonnelSettings } from '../../personnel.settings';

@Component({
  selector: 'app-personnel-edit',
  templateUrl: './personnel-edit.component.html',
  styleUrls: ['./personnel-edit.component.css']
})
export class PersonnelEditComponent implements OnInit {

  // #region variables------------------------------------
  get personnelIndexUrl() { return PersonnelSettings.PERSONNEL_INDEX_URL; }

  item: PersonnelDTO = {} as PersonnelDTO;

  form = new UntypedFormGroup({
    idControl: new FormControl('', [Validators.required]),
    firstNameControl: new FormControl('', [Validators.required]),
    lastNameControl: new FormControl('', [Validators.required]),
    ageControl: new FormControl('', [Validators.required]),
    mobileControl: new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)])
  });

  get idControl() { return this.form.get('idControl'); }
  get firstNameControl() { return this.form.get('firstNameControl'); }
  get lastNameControl() { return this.form.get('lastNameControl'); }
  get ageControl() { return this.form.get('ageControl'); }
  get mobileControl() { return this.form.get('mobileControl'); }
  // #endregion

  // #region hooks----------------------------------------
  constructor(private personnelService: PersonnelService, private route: ActivatedRoute
    , private router: Router) {
  }
  ngOnInit(): void {
    this.getData();
  }
  // #endregion

  // #region functions------------------------------------
  getData() {
    this.route.params.pipe(
      switchMap((params: Params) => this.personnelService.getById(params['id']))
    ).subscribe(result => {
      this.item = result;
      this.loadFormData();
    });
  }
  loadFormData() {
    this.idControl?.setValue(this.item.Id);
    this.firstNameControl?.setValue(this.item.FirstName);
    this.lastNameControl?.setValue(this.item.LastName);
    this.ageControl?.patchValue(this.item.Age);
    this.mobileControl?.patchValue(this.item.Mobile);
  }
  onSubmit() {
    this.sendData();

  }
  sendData() {
    let personnelDTO: PersonnelDTO = {
      Id: this.idControl?.value,
      FirstName: this.firstNameControl?.value,
      LastName: this.lastNameControl?.value,
      Age: this.ageControl?.value,
      Mobile: this.mobileControl?.value
    }
    this.personnelService.edit(personnelDTO).subscribe(result => {
      this.router.navigate([this.personnelIndexUrl]);
    });
  }
  // #endregion

}
