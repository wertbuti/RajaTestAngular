import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PersonnelCertificateDTO } from '../../data/schemas/PersonnelCertificateDTO';
import { PersonnelCertificateService } from '../../data/services/personnel-certificate.service';
import { PersonnelSettings } from '../../personnel.settings';

@Component({
  selector: 'app-personnel-certificate-delete',
  templateUrl: './personnel-certificate-delete.component.html',
  styleUrls: ['./personnel-certificate-delete.component.css']
})
export class PersonnelCertificateDeleteComponent implements OnInit {

  // #region variables------------------------------------
  get personnelCertificateIndexUrl() { return PersonnelSettings.PERSONNELCERTIFICATE_INDEX_URL; }

  id: number | undefined;
  item: PersonnelCertificateDTO = {} as PersonnelCertificateDTO;
  personnelId = 0;

  //#endregion

  // #region hooks----------------------------------------
  constructor(private personnelCertificateService: PersonnelCertificateService
    , private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.getData();
  }
  //#endregion

  // #region functions------------------------------------
  readPersonnelId() {
    this.personnelId = this.item.PersonnelId;
  }
  getData() {
    this.route.params.pipe(
      switchMap((params: Params) => this.personnelCertificateService.getById(params['id']))
    ).subscribe(result => {
      this.item = result;
      this.readPersonnelId();
    });
  }

  onDelete() {
    this.personnelCertificateService.delete(this.item.Id).subscribe(() => {
      this.router.navigate([this.personnelCertificateIndexUrl,this.personnelId]);
    });
  }
  //#endregion

}
