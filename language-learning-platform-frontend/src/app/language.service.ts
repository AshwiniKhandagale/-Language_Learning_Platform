import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from './app-language-selection/language.model';
import { Material } from './app-learning-materials/material.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly BASE_URL = 'http://localhost:3000';
  private readonly LANGUAGES_URL = `${this.BASE_URL}/languages`;
  private readonly SELECTED_LANGUAGES_URL = `${this.BASE_URL}/selectedLanguages`;
  private readonly LEARNING_MATERIALS_ADMIN_URL = `${this.BASE_URL}/admin/learning-materials`;
  private readonly LEARNING_MATERIALS_USER_URL = `${this.BASE_URL}/user/learning-materials`;

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.LANGUAGES_URL);
  }

  addLanguageInWishList(language: Language): Observable<Language> {
    return this.http.post<Language>(this.SELECTED_LANGUAGES_URL, language);
  }


  fetchLearningMaterials(): Observable<any> {
    return this.http.get(this.LEARNING_MATERIALS_ADMIN_URL);
  }

  postLearningMaterials(data: any): Observable<any> {
    return this.http.post(this.LEARNING_MATERIALS_ADMIN_URL, data);
  }

  getLearningMaterials(contentType: string, page: number, pageSize: number, sortBy: string, sortOrder: string): Observable<any> {
    const params = new HttpParams()
      .set('contentType', contentType)
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy', sortBy)
      .set('sortOrder', sortOrder);

    return this.http.get<any>(this.LEARNING_MATERIALS_USER_URL, { params });
  }
  createAssessment(params: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/user/create-assessment`, { params });
  }

  getAssessments(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/user/assessments`);
  }

  updateAssessmentProgress(assessmentId: string, body: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/user/assessment-progress/${assessmentId}`, body);
  }
  createChallenge(params: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/admin/create-challenge`, { params });
  }

  getChallenges(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/user/challenges`);
  }

  getLeaderboard(challengeId: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/user/leaderboard/${challengeId}`);
  }
  
signUpForChallenge(challenge_id: any, languageId: string, count: number, durationAllowed: number, difficultyLevel: string): Observable<any> {
    let params = new HttpParams()
        .set('challengeId', challenge_id)
        .set('languageId', languageId)
        .set('count', count.toString())
        .set('durationAllowed', durationAllowed.toString())
        .set('difficultyLevel', difficultyLevel);

    return this.http.get<any>(`${this.BASE_URL}/user/create-assessment`, { params: params });
}
  
}
