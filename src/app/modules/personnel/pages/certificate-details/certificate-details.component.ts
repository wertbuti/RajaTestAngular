import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CertificateDTO } from '../../data/schemas/certificateDTO';
import { CertificateService } from '../../data/services/certificate.service';
import { PersonnelSettings } from '../../personnel.settings';
@Component({
  selector: 'app-certificate-details',
  templateUrl: './certificate-details.component.html',
  styleUrls: ['./certificate-details.component.css']
})
export class CertificateDetailsComponent implements OnInit {

  // #region variables------------------------------------
  get certificateIndexUrl() { return PersonnelSettings.CERTIFICATE_INDEX_URL; }

  id: number | undefined;
  item: CertificateDTO = {} as CertificateDTO;
  //#endregion

  // #region hooks----------------------------------------
  constructor(private certificateService: CertificateService
    , private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.getData();
  }
  //#endregion

  // #region functions------------------------------------
  getData() {
    this.route.params.pipe(
      switchMap((params: Params) => this.certificateService.getById(params['id']))
    ).pipe(
      map(certificate => {
        return {
          Id: certificate.Id,
          Name: certificate.Name
        }
      })
    )
      .subscribe(result => {
        this.item = result;
      });
  }
  //#endregion

}
