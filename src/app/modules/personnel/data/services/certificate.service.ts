import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CertificateDTO } from '../schemas/certificateDTO';
import { PersonnelSettings } from '../../personnel.settings';
import { PagedResult } from '../schemas/pagedResult';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) { }
  //-----------------------------------------------------------------
  getAll(): Observable<CertificateDTO[]> {
    let url = PersonnelSettings.API_ENDPOINT + `/Certificate/GetAll`;
    return this.http.get<CertificateDTO[]>(url);
  }
  //-----------------------------------------------------------------
  getAllPaged(page: number, pageSize: number): Observable<PagedResult<CertificateDTO>> {
    console.warn(pageSize);
    let url = PersonnelSettings.API_ENDPOINT + `/Certificate/IndexPaged?`;
    url += `page=${page}`;
    url += `&pageSize=${pageSize}`;

    return this.http.get<PagedResult<CertificateDTO>>(url);
  }
  //-----------------------------------------------------------------
  getById(id: number): Observable<CertificateDTO> {
    let url = PersonnelSettings.API_ENDPOINT + `/Certificate/GetById?`;
    url += `id=${id}`;

    return this.http.get<CertificateDTO>(url);
  }
  //-----------------------------------------------------------------
  create(certificateDTO: CertificateDTO): Observable<any> {
    let url = PersonnelSettings.API_ENDPOINT + `/Certificate/Create`;
    console.warn(url);
    console.warn(JSON.stringify(certificateDTO));
    return this.http.post<any>(url, certificateDTO);
  }
  //-----------------------------------------------------------------
  edit(certificateDTO: CertificateDTO): Observable<any> {
    let url = PersonnelSettings.API_ENDPOINT + `/Certificate/Edit`;

    return this.http.put<any>(url, certificateDTO);
  }
  //-----------------------------------------------------------------
  delete(id: number): Observable<any> {
    let url = PersonnelSettings.API_ENDPOINT + `/Certificate/Delete?`;
    url += `id=${id}`;

    return this.http.delete<any>(url);
  }

}
