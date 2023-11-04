import { Component, OnInit } from '@angular/core';
import { PersonnelSettings } from '../../personnel.settings';
import { PagedResult } from '../../data/schemas/pagedResult';
import { PersonnelCertificateDTO } from '../../data/schemas/PersonnelCertificateDTO';
import { PersonnelCertificateService } from '../../data/services/personnel-certificate.service';
import { PageEvent } from '@angular/material/paginator';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-personnel-certificate-index',
  templateUrl: './personnel-certificate-index.component.html',
  styleUrls: ['./personnel-certificate-index.component.css']
})
export class PersonnelCertificateIndexComponent implements OnInit {

  // #region variables------------------------------------
  get personnelCertificateNewUrl() { return PersonnelSettings.PERSONNELCERTIFICATE_NEW_URL; }
  get personnelCertificateEditUrl() { return PersonnelSettings.PERSONNELCERTIFICATE_EDIT_URL; }
  get personnelCertificateDetailsUrl() { return PersonnelSettings.PERSONNELCERTIFICATE_DETAILS_URL; }
  get personnelCertificateDeleteUrl() { return PersonnelSettings.PERSONNELCERTIFICATE_DELETE_URL; }

  pagedResult!: PagedResult<PersonnelCertificateDTO>;
  personnelCertificateDTOs!: PersonnelCertificateDTO[];
  personnelId = 0;
  //#endregion

  // #region hooks----------------------------------------
  constructor(private personnelCertificateService: PersonnelCertificateService, private route: ActivatedRoute
    , private router: Router)  {
    // this.getData(this.pageIndex, this.pageSize);
    
    this.getData();
  }
  ngOnInit() {
    this.readPersonnelId();
  }
  
  //#endregion

  // #region functions------------------------------------

  readPersonnelId() {
    this.route.params.subscribe(params => {
      this.personnelId = params['personnelId'];
    });
  }
  getData2(page: number, pageSize: number) {
    this.personnelCertificateService.getAllPaged(page, pageSize)
      .subscribe(result => {
        this.pagedResult = result;
        this.length = this.pagedResult.RowCount;
      });
  }
  getData() {
    this.route.params.pipe(
      switchMap((params: Params) => this.personnelCertificateService.getByPersonnelId(params['personnelId']))
    ).subscribe(result => {
      this.personnelCertificateDTOs = result;
    });
  }

  // #region paging --------------------------------
  length = 0;
  pageIndex = 1;
  pageSize = 5;
  pageSizeOptions = [5, 10, 15, 25];

  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getData2(this.pageIndex + 1, this.pageSize);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  // #endregion

  // #endregion

}
