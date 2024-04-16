import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.loginUser(this.loginForm.value).subscribe(response => {
      // Handle login success
    }, error => {
      // Handle login error
    });
  }
}

// registration.component.ts
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      // Add other registration fields and validators as needed
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }

    this.authService.registerUser(this.registrationForm.value).subscribe(response => {
      // Handle registration success
    }, error => {
      // Handle registration error
    });
  }

}
