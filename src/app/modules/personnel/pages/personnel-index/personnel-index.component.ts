import { Component } from '@angular/core';
import { PersonnelSettings } from '../../personnel.settings';
import { PagedResult } from '../../data/schemas/pagedResult';
import { PersonnelDTO } from '../../data/schemas/personnelDTO';
import { PersonnelService } from '../../data/services/personnel.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-personnel-index',
  templateUrl: './personnel-index.component.html',
  styleUrls: ['./personnel-index.component.css']
})
export class PersonnelIndexComponent {

  // #region variables------------------------------------
  get personnelNewUrl() { return PersonnelSettings.PERSONNEL_NEW_URL; }
  get personnelEditUrl() { return PersonnelSettings.PERSONNEL_EDIT_URL; }
  get personnelDetailsUrl() { return PersonnelSettings.PERSONNEL_DETAILS_URL; }
  get personnelDeleteUrl() { return PersonnelSettings.PERSONNEL_DELETE_URL; }
  
  get personnelCertificateIndexUrl() { return PersonnelSettings.PERSONNELCERTIFICATE_INDEX_URL; }

  pagedResult!: PagedResult<PersonnelDTO>;
  personnelDTOs!: PersonnelDTO[];
  //#endregion

  // #region hooks----------------------------------------
  constructor(private personnelService: PersonnelService) {
    // this.getData(this.pageIndex, this.pageSize);
    
    this.getData();
  }
  //#endregion

  // #region functions------------------------------------
  getData2(page: number, pageSize: number) {
    this.personnelService.getAllPaged(page, pageSize)
      .subscribe(result => {
        this.pagedResult = result;
        this.length = this.pagedResult.RowCount;
      });
  }
  getData() {
    
    this.personnelService.getAll()
      .subscribe(result => {
        this.personnelDTOs = result;
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
