import { Component, inject, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/components/shared.module';
import { AuthFormComponent } from '../../components/auth/auth-form/auth-form.component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, SharedModule, AuthFormComponent, RouterModule],
  standalone: true,
})
export class LoginComponent {
  isLoading = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}
  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });
  fields = [
    { name: 'email', label: 'Email', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  onLogin() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;
      this.authService
        .login({
          email: email ?? '',
          password: password ?? '',
        })
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            console.log('Login successful:', response);
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Login failed:', error);
          },
          complete: () => {
            this.isLoading = false;
          },
        });
    }
  }
}
