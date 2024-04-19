import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const LOGIN_URL = 'http://localhost:3000/userData';
const REGISTER_URL = 'http://localhost:3000/userData';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private http: HttpClient) { }

  loginUser(credentials: { username: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = credentials; 

    return this.http.post(LOGIN_URL, body, { headers })
      .pipe(
        catchError(this.handleError) 
      );
  }
  register(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(REGISTER_URL, userData, { headers });
  }
  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      
      errorMessage = 'An error occurred: ' + error.error.message;
    } else {
      errorMessage = `Backend returned code ${error.status}: ${error.body.message}`;
    }
    return throwError(errorMessage); // Rethrow the error with a user-friendly message
  }
}
