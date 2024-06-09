import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ocean } from '../interfaces/Ocean';

@Injectable({
  providedIn: 'root'
})

export class OceanService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?pagina=1&qtde=20';

  constructor(private http: HttpClient) {
   }

   list(filters: any): Observable<Ocean[]> {
    let params = new HttpParams();
    for (const key in filters) {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
      // if (filters[key] !== null && filters[key] !== '') {
      //   if (key === 'temperaturaAgua') {
      //     params = params.set(key, parseInt(filters[key], 10).toString());
      //   } else if (key === 'pH') {
      //     params = params.set(key, parseFloat(filters[key]).toString());
      //   } else {
      //     params = params.set(key, filters[key]);
      //   }
      // }
    }

    return this.http.get<Ocean[]>(this.apiUrl, {params});
  }
}
