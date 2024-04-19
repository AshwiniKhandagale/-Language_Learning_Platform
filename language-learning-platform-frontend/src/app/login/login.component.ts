import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
 
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
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
    }, error => {
       console.error('Login failed:', error);
      // Handle login error
    });
  }



}
