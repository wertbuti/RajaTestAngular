import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PersonnelDTO } from '../../data/schemas/personnelDTO';
import { PersonnelService } from '../../data/services/personnel.service';
import { PersonnelSettings } from '../../personnel.settings';
@Component({
  selector: 'app-personnel-details',
  templateUrl: './personnel-details.component.html',
  styleUrls: ['./personnel-details.component.css']
})
export class PersonnelDetailsComponent implements OnInit {

  // #region variables------------------------------------
  get personnelIndexUrl() { return PersonnelSettings.PERSONNEL_INDEX_URL; }

  id: number | undefined;
  item: PersonnelDTO = {} as PersonnelDTO;
  //#endregion

  // #region hooks----------------------------------------
  constructor(private personnelService: PersonnelService
    , private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.getData();
  }
  //#endregion

  // #region functions------------------------------------
  getData() {
    this.route.params.pipe(
      switchMap((params: Params) => this.personnelService.getById(params['id']))
    ).pipe(
      map(personnel => {
        return {
          Id: personnel.Id,
          FirstName: personnel.FirstName,
          LastName: personnel.LastName,
          Age: personnel.Age,
          Mobile: personnel.Mobile
        }
      })
    )
      .subscribe(result => {
        this.item = result;
      });
  }
  //#endregion

}
