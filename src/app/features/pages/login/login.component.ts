import { Component, inject, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SharedModule } from '../../../shared/components/shared.module';
import { AuthFormComponent } from '../../components/auth/auth-form/auth-form.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageService } from 'primeng/api';

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
    private messageService: MessageService,
  ) {}
  loginForm = this.fb.group({
    email: ['', { nonNullable: true, validators: [Validators.required] }],
    password: ['', { nonNullable: true, validators: [Validators.required] }],
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
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Login failed: ' + (error.error || 'Unknown error'),
            });
            console.error('Login failed:', error);
            this.isLoading = false;
          },
          complete: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Login successful!',
            });
            this.isLoading = false;
          },
        });
    }
  }
}
