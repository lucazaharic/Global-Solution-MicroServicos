import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Projects } from '../interfaces/Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?pagina=2&qtde=20';

  constructor(private http: HttpClient) { }

  list(filters: any): Observable<Projects[]> {
    let params = new HttpParams();
    for (const key in filters) {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    }
    return this.http.get<any[]>(this.apiUrl, { params }).pipe(
      // map(data => {
      //   return data.map(item => ({
      //     projetosConservacao: item.projetosConservacao
      //   }));
      // })
      map(data => {
        return data.flatMap(ocean => ocean.projetosConservacao);
      })
    );
  }
}
