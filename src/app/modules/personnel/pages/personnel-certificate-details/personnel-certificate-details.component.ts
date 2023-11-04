import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PersonnelCertificateDTO } from '../../data/schemas/PersonnelCertificateDTO';
import { PersonnelCertificateService } from '../../data/services/personnel-certificate.service';
import { PersonnelSettings } from '../../personnel.settings';
@Component({
  selector: 'app-personnel-certificate-details',
  templateUrl: './personnel-certificate-details.component.html',
  styleUrls: ['./personnel-certificate-details.component.css']
})
export class PersonnelCertificateDetailsComponent implements OnInit {

  // #region variables------------------------------------
  get personnelCertificateIndexUrl() { return PersonnelSettings.PERSONNELCERTIFICATE_INDEX_URL; }

  id: number | undefined;
  item: PersonnelCertificateDTO = {} as PersonnelCertificateDTO;
  personnelId = 0;

  //#endregion

  // #region hooks----------------------------------------
  constructor(private personnelCertificateService: PersonnelCertificateService
    , private route: ActivatedRoute) {

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
    ).pipe(
      map(personnelCertificate => {
        return {
          Id: personnelCertificate.Id,
          PersonnelId: personnelCertificate.PersonnelId,
          CertificateId: personnelCertificate.CertificateId,
          YearCatch: personnelCertificate.YearCatch,
          Gpa: personnelCertificate.Gpa,
          Personnel: personnelCertificate.Personnel,
          Certificate: personnelCertificate.Certificate
        }
      })
    )
      .subscribe(result => {
        this.item = result;
        this.readPersonnelId();
      });
  }
  //#endregion

}
