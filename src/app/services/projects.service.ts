import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../interfaces/Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?pagina=1&qtde=20';
  constructor(private http: HttpClient) {
   }

   list(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.apiUrl) as Observable<Projects[]>;
  }
}
