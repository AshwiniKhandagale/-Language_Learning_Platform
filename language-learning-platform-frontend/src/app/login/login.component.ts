import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.loginUser(this.loginForm.value).subscribe(response => {
      console.log('Login successful!', response);
      alert(response.message)
      this.router.navigate(['/dashboard']);
    }, error => {
      console.error('Login failed:', error);
      // Handle login error
    });
  }

}
