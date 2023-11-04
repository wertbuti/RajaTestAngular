import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PersonnelDTO } from '../../data/schemas/personnelDTO';
import { PersonnelService } from '../../data/services/personnel.service';
import { PersonnelSettings } from '../../personnel.settings';

@Component({
  selector: 'app-personnel-delete',
  templateUrl: './personnel-delete.component.html',
  styleUrls: ['./personnel-delete.component.css']
})
export class PersonnelDeleteComponent implements OnInit {

  // #region variables------------------------------------
  get personnelIndexUrl() { return PersonnelSettings.PERSONNEL_INDEX_URL; }

  id: number | undefined;
  item: PersonnelDTO = {} as PersonnelDTO;
  //#endregion

  // #region hooks----------------------------------------
  constructor(private personnelService: PersonnelService
    , private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.getData();
  }
  //#endregion

  // #region functions------------------------------------
  getData() {
    this.route.params.pipe(
      switchMap((params: Params) => this.personnelService.getById(params['id']))
    ).subscribe(result => {
      this.item = result;
    });
  }

  onDelete() {
    this.personnelService.delete(this.item.Id).subscribe(() => {
      this.router.navigate([this.personnelIndexUrl]);
    });
  }
  //#endregion

}
