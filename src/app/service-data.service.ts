import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Service } from './service/service.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getListService(): Promise<any> {
    const url: string = `${this.apiBaseUrl}/service`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Terjadi kesalahan, coba lagi!', error);
    return Promise.reject(error.message || error);
  }

}
