import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevInterface } from '../types/dev';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  baseURL = 'http://localhost:3333';

  constructor(private httpClient: HttpClient) { }

  getDevs(): Observable<DevInterface[]> {
    return this.httpClient.get<DevInterface[]>(`${this.baseURL}/developers`);
  }

  createDev(dados: DevInterface): Observable<DevInterface> {
    return this.httpClient.post<DevInterface>(`${this.baseURL}/developers`, dados);
  }
}
