import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { RegistrationComponent } from './registration/registration.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLanguageSelectionComponent } from './app-language-selection/app-language-selection.component';
import { AppLearningMaterialsComponent } from './app-learning-materials/app-learning-materials.component';
import { AppLanguageAssessmentsComponent } from './app-language-assessments/app-language-assessments.component';
import { AppProgressTrackingComponent } from './app-progress-tracking/app-progress-tracking.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'language-selection', component: AppLanguageSelectionComponent },
  { path: 'learning-materials', component: AppLearningMaterialsComponent },
  { path: 'language-assessments', component: AppLanguageAssessmentsComponent },
  { path: 'progress-tracking', component: AppProgressTrackingComponent },
  // Add other routes for your application
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
