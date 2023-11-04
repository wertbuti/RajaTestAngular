import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { PersonnelDTO } from '../../data/schemas/personnelDTO';
import { PersonnelService } from '../../data/services/personnel.service';
import { PersonnelSettings } from '../../personnel.settings';

@Component({
  selector: 'app-personnel-new',
  templateUrl: './personnel-new.component.html',
  styleUrls: ['./personnel-new.component.css']
})
export class PersonnelNewComponent {

  // #region variables------------------------------------
  get personnelIndexUrl() { return PersonnelSettings.PERSONNEL_INDEX_URL; }

  form = new UntypedFormGroup({
    firstNameControl: new FormControl('', [Validators.required]),
    lastNameControl: new FormControl('', [Validators.required]),
    ageControl: new FormControl('', [Validators.required]),
    mobileControl: new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)])
  });

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

  }
  // #endregion

  // #region functions------------------------------------
  onSubmit() {
    this.sendData();
  }

  sendData() {
    let personnelDTO: PersonnelDTO = {
      Id: 0,
      FirstName: this.firstNameControl?.value,
      LastName: this.lastNameControl?.value,
      Age: this.ageControl?.value,
      Mobile: this.mobileControl?.value,
      // FullName:""
    }
    this.personnelService.create(personnelDTO).pipe(
      catchError(error=> {throw error;})
    ).subscribe(result => {
      this.router.navigate([this.personnelIndexUrl]);
    });
  }
  // #endregion

}
