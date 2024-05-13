import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLanguageSelectionComponent } from './app-language-selection/app-language-selection.component';
import { AppLearningMaterialsComponent } from './app-learning-materials/app-learning-materials.component';
import { AppLanguageAssessmentsComponent } from './app-language-assessments/app-language-assessments.component';
import { AppProgressTrackingComponent } from './app-progress-tracking/app-progress-tracking.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppChallengesGamesComponent } from './app-challenges-games/app-challenges-games.component';
import { AuthInterceptor } from './auth.interceptor';
import { CreateAssessmentComponent } from './create-assessment/create-assessment.component';
import { ViewAssessmentsComponent } from './view-assessments/view-assessments.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import { ViewLeaderboardComponent } from './view-leaderboard/view-leaderboard.component';
import { ViewChallengesComponent } from './view-challenges/view-challenges.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    AppLanguageSelectionComponent,
    AppLearningMaterialsComponent,
    AppLanguageAssessmentsComponent,
    AppProgressTrackingComponent,
    AppChallengesGamesComponent,
    CreateAssessmentComponent,
    ViewAssessmentsComponent,
    CreateChallengeComponent,
    ViewLeaderboardComponent,
    ViewChallengesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Import for template-driven forms (optional)
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
