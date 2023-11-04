import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonnelDTO } from '../schemas/personnelDTO';
import { PersonnelSettings } from '../../personnel.settings';
import { PagedResult } from '../schemas/pagedResult';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }
  //-----------------------------------------------------------------
  getAll(): Observable<PersonnelDTO[]> {
    let url = PersonnelSettings.API_ENDPOINT + `/Personnel/GetAll`;

    return this.http.get<PersonnelDTO[]>(url);
  }
  //-----------------------------------------------------------------
  getAllPaged(page: number, pageSize: number): Observable<PagedResult<PersonnelDTO>> {
    console.warn(pageSize);
    let url = PersonnelSettings.API_ENDPOINT + `/Personnel/IndexPaged?`;
    url += `page=${page}`;
    url += `&pageSize=${pageSize}`;

    return this.http.get<PagedResult<PersonnelDTO>>(url);
  }
  //-----------------------------------------------------------------
  getById(id: number): Observable<PersonnelDTO> {
    let url = PersonnelSettings.API_ENDPOINT + `/Personnel/GetById?`;
    url += `id=${id}`;

    return this.http.get<PersonnelDTO>(url);
  }
  //-----------------------------------------------------------------
  create(personnelDTO: PersonnelDTO): Observable<any> {
    let url = PersonnelSettings.API_ENDPOINT + `/Personnel/Create`;
    console.warn(url);
    console.warn(JSON.stringify(personnelDTO));
    return this.http.post<any>(url, personnelDTO);
  }
  //-----------------------------------------------------------------
  edit(personnelDTO: PersonnelDTO): Observable<any> {
    let url = PersonnelSettings.API_ENDPOINT + `/Personnel/Edit`;

    return this.http.put<any>(url, personnelDTO);
  }
  //-----------------------------------------------------------------
  delete(id: number): Observable<any> {
    let url = PersonnelSettings.API_ENDPOINT + `/Personnel/Delete?`;
    url += `id=${id}`;

    return this.http.delete<any>(url);
  }

}
