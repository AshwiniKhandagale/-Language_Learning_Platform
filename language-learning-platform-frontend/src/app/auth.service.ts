import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; 
  private token: any;
  private userType:any;
  constructor(private http: HttpClient) { }

  loginUser(credentials: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = credentials;

    return this.http.post<any>(`${this.apiUrl}/login`, body, { headers }).pipe(
      tap(response => {
        this.token = response.token; // Store the token in the service
        this.userType = response.userType;
        localStorage.setItem('token', this.token); 
        localStorage.setItem('userType', this.userType); 
      }),
      catchError(this.handleError)
    );
  }

  register(userData: { email: string; password: string; firstName: string; lastName: string; userType: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/register`, userData, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  logoutUser(): void {
    this.token = null; 
    localStorage.removeItem('token'); 
  }

  getToken(): string | null {
    return this.token;
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred: ' + error.error.message;
    } else {
      errorMessage = `Backend returned code ${error.status}: ${error.body.message}`;
    }
    return throwError(errorMessage);
  }
}
