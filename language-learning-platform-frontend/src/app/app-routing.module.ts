import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { RegistrationComponent } from './registration/registration.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLanguageSelectionComponent } from './app-language-selection/app-language-selection.component';
import { AppLearningMaterialsComponent } from './app-learning-materials/app-learning-materials.component';
import { AppLanguageAssessmentsComponent } from './app-language-assessments/app-language-assessments.component';
import { AppProgressTrackingComponent } from './app-progress-tracking/app-progress-tracking.component';
import { AppChallengesGamesComponent } from './app-challenges-games/app-challenges-games.component';
import { CreateAssessmentComponent } from './create-assessment/create-assessment.component';
import { ViewAssessmentsComponent } from './view-assessments/view-assessments.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import { ViewLeaderboardComponent } from './view-leaderboard/view-leaderboard.component';
import { ViewChallengesComponent } from './view-challenges/view-challenges.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'language-selection', component: AppLanguageSelectionComponent },
  { path: 'learning-materials', component: AppLearningMaterialsComponent },
  { path: 'language-assessments', component: AppLanguageAssessmentsComponent },
  { path: 'progress-tracking', component: AppProgressTrackingComponent },
  { path: 'challenges-games', component: AppChallengesGamesComponent },
  { path: 'create-assessment', component: CreateAssessmentComponent },
  { path: 'view-assessments', component: ViewAssessmentsComponent },
  { path: 'create-challenge', component: CreateChallengeComponent },
  { path: 'view-challenges', component: ViewChallengesComponent },
  { path: 'view-leaderboard/:challengeId', component: ViewLeaderboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
