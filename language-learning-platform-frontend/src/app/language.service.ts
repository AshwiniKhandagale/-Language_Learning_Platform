import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from './app-language-selection/language.model';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private apiUrl = 'http://localhost:3000/languages'; // Set your API URL here
  private selectedapiUrl = 'http://localhost:3000/selectedLanguages'; 
  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.apiUrl);
  }
  addLanguageInWishList(language: Language): Observable<Language[]> {
    return this.http.post<Language[]>(this.selectedapiUrl, language);
  }
  getselectedLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.selectedapiUrl);
  }
}
