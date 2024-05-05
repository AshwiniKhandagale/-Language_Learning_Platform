import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageChallenges {
  private challengesapiUrl = 'http://localhost:3000/challenges';
  private gamesapiUrl = 'http://localhost:3000/games';
   
  constructor(private http: HttpClient) { }

  getChallenges(): Observable<string[]> {
    return this.http.get<string[]>(`${this.challengesapiUrl}`);
  }

  getGames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.gamesapiUrl}`);
  }
}
