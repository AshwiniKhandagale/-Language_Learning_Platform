import { Component,OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nativeLanguage: ['', Validators.required],
      targetLanguages: ['', Validators.required],
      avatarUrl: ['']
    });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    // Submit the registration form data
    console.log(this.registrationForm.value);
  }
}
