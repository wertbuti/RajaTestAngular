import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CertificateDTO } from '../../data/schemas/certificateDTO';
import { CertificateService } from '../../data/services/certificate.service';
import { PersonnelSettings } from '../../personnel.settings';

@Component({
  selector: 'app-certificate-delete',
  templateUrl: './certificate-delete.component.html',
  styleUrls: ['./certificate-delete.component.css']
})
export class CertificateDeleteComponent implements OnInit {

  // #region variables------------------------------------
  get certificateIndexUrl() { return PersonnelSettings.CERTIFICATE_INDEX_URL; }

  id: number | undefined;
  item: CertificateDTO = {} as CertificateDTO;
  //#endregion

  // #region hooks----------------------------------------
  constructor(private certificateService: CertificateService
    , private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.getData();
  }
  //#endregion

  // #region functions------------------------------------
  getData() {
    this.route.params.pipe(
      switchMap((params: Params) => this.certificateService.getById(params['id']))
    ).subscribe(result => {
      this.item = result;
    });
  }

  onDelete() {
    this.certificateService.delete(this.item.Id).subscribe(() => {
      this.router.navigate([this.certificateIndexUrl]);
    });
  }
  //#endregion

}
