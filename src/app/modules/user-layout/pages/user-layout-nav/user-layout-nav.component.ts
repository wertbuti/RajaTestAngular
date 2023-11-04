import { Component } from '@angular/core';
import { PersonnelSettings } from '@app/modules/personnel/personnel.settings';

@Component({
  selector: 'app-user-layout-nav',
  templateUrl: './user-layout-nav.component.html',
  styleUrls: ['./user-layout-nav.component.css']
})
export class UserLayoutNavComponent {
  get personnelIndexUrl() { return PersonnelSettings.PERSONNEL_INDEX_URL; }
  get certificateIndexUrl() { return PersonnelSettings.CERTIFICATE_INDEX_URL; }
}
