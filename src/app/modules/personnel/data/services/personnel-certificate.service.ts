import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonnelCertificateDTO, PersonnelCertificateInsertDTO } from '../schemas/PersonnelCertificateDTO';
import { PersonnelSettings } from '../../personnel.settings';
import { PagedResult } from '../schemas/pagedResult';

@Injectable({
  providedIn: 'root'
})
export class PersonnelCertificateService {

  constructor(private http: HttpClient) { }
  //-----------------------------------------------------------------
  getAll(): Observable<PersonnelCertificateDTO[]> {
    let url = PersonnelSettings.API_ENDPOINT + `/PersonnelCertificate/GetAll`;

    return this.http.get<PersonnelCertificateDTO[]>(url);
  }
  //-----------------------------------------------------------------
  getAllPaged(page: number, pageSize: number): Observable<PagedResult<PersonnelCertificateDTO>> {
    console.warn(pageSize);
    let url = PersonnelSettings.API_ENDPOINT + `/PersonnelCertificate/IndexPaged?`;
    url += `page=${page}`;
    url += `&pageSize=${pageSize}`;

    return this.http.get<PagedResult<PersonnelCertificateDTO>>(url);
  }
  //-----------------------------------------------------------------
  getById(id: number): Observable<PersonnelCertificateDTO> {
    let url = PersonnelSettings.API_ENDPOINT + `/PersonnelCertificate/GetById?`;
    url += `id=${id}`;

    return this.http.get<PersonnelCertificateDTO>(url);
  }
  //-----------------------------------------------------------------
  getByPersonnelId(personnelId: number): Observable<PersonnelCertificateDTO[]> {
    let url = PersonnelSettings.API_ENDPOINT + `/PersonnelCertificate/GetByPersonnelId?`;
    url += `personnelId=${personnelId}`;

    return this.http.get<PersonnelCertificateDTO[]>(url);
  }
  //-----------------------------------------------------------------
  create(personnelCertificateInsertDTO: PersonnelCertificateInsertDTO): Observable<any> {
    let url = PersonnelSettings.API_ENDPOINT + `/PersonnelCertificate/Create`;
    // console.warn(JSON.stringify(personnelCertificateInsertDTO));
    return this.http.post<any>(url, personnelCertificateInsertDTO);
  }
  //-----------------------------------------------------------------
  edit(personnelCertificateInsertDTO: PersonnelCertificateInsertDTO): Observable<any> {
    let url = PersonnelSettings.API_ENDPOINT + `/PersonnelCertificate/Edit`;

    return this.http.put<any>(url, personnelCertificateInsertDTO);
  }
  //-----------------------------------------------------------------
  delete(id: number): Observable<any> {
    let url = PersonnelSettings.API_ENDPOINT + `/PersonnelCertificate/Delete?`;
    url += `id=${id}`;

    return this.http.delete<any>(url);
  }

}
