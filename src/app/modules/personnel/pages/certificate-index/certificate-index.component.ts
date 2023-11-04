import { Component } from '@angular/core';
import { PersonnelSettings } from '../../personnel.settings';
import { PagedResult } from '../../data/schemas/pagedResult';
import { CertificateDTO } from '../../data/schemas/certificateDTO';
import { CertificateService } from '../../data/services/certificate.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-certificate-index',
  templateUrl: './certificate-index.component.html',
  styleUrls: ['./certificate-index.component.css']
})
export class CertificateIndexComponent {

  // #region variables------------------------------------
  get certificateNewUrl() { return PersonnelSettings.CERTIFICATE_NEW_URL; }
  get certificateEditUrl() { return PersonnelSettings.CERTIFICATE_EDIT_URL; }
  get certificateDetailsUrl() { return PersonnelSettings.CERTIFICATE_DETAILS_URL; }
  get certificateDeleteUrl() { return PersonnelSettings.CERTIFICATE_DELETE_URL; }

  pagedResult!: PagedResult<CertificateDTO>;
  certificateDTOs!: CertificateDTO[];
  //#endregion

  // #region hooks----------------------------------------
  constructor(private certificateService: CertificateService) {
    // this.getData(this.pageIndex, this.pageSize);
    
    this.getData();
  }
  //#endregion

  // #region functions------------------------------------
  getData2(page: number, pageSize: number) {
    this.certificateService.getAllPaged(page, pageSize)
      .subscribe(result => {
        this.pagedResult = result;
        this.length = this.pagedResult.RowCount;
      });
  }
  getData() {
    
    
    this.certificateService.getAll()
      .subscribe(result => {
        this.certificateDTOs = result;
        
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
