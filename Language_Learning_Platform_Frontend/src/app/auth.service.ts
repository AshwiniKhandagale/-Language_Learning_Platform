import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://api.example.com'; // API endpoint

  constructor(private http: HttpClient) {}

  registerUser(user:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  loginUser(user:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }
}
