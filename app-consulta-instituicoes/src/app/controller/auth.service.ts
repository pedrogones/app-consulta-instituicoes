import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { revgas } from '../model/revgas';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private readonly apiUrl = "/api";
  constructor(private http: HttpClient) { }

  index(): Observable<revgas[]> {
    return this.http.get<revgas[]>(`${this.apiUrl}/all`).pipe(
      first()
    );
  }

  searchByName(codigo_compensacao: string): Observable<revgas>{
    return this.http.get<revgas>(`${this.apiUrl}/${codigo_compensacao}`)
  }
}
