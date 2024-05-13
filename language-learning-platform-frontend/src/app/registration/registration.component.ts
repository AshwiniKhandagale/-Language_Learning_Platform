import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup | any;
  registrationSuccess = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }

    const formData = {
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      userType: this.registrationForm.value.userType
    };

    this.authService.register(formData)
      .subscribe(
        response => {
          console.log('Registration successful!', response);
          this.registrationSuccess = true;
          alert("Registration successful!")
        },
        error => {
          alert("Registration failed!")
          console.error('Registration failed:', error);
        }
      );
  }

}
