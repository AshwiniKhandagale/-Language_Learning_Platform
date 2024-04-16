import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './app/login/login.component';
const combinedProviders = [
  provideHttpClient(),
  ...appConfig.providers 
];

bootstrapApplication(LoginComponent, {
  providers: combinedProviders,
})
.catch((err) => console.error(err));
