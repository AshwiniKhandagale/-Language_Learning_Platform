import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup | any;
  registrationSuccess = false;
  constructor(private formBuilder: FormBuilder,private authService: AuthService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nativeLanguage: ['', Validators.required],
      targetLanguages: ['', Validators.required],
      avatarUrl: ['']
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }

    const formData = this.registrationForm.value;
    this.authService.register(formData) // Call your AuthService register method
      .subscribe(
        response => {
          console.log('Registration successful!', response); 
          this.registrationSuccess = true// Handle successful registration (e.g., redirect to login)
        },
        error => {
          console.error('Registration failed:', error); // Handle registration errors (e.g., display error messages)
        }
      );
  }

}
