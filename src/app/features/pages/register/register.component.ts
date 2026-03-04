import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { SharedModule } from '../../../shared/components/shared.module';
import { AuthFormComponent } from '../../components/auth/auth-form/auth-form.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [SharedModule, AuthFormComponent, RouterModule, ReactiveFormsModule],
  standalone: true,
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private sharedModule: SharedModule,
    private messageService: MessageService,
  ) {}
  isLoading = false;
  registerForm = this.fb.group({
    email: ['', { nonNullable: true, validators: [Validators.required] }],
    role: ['user', { nonNullable: true, validators: [Validators.required] }],
    password: ['', { nonNullable: true, validators: [Validators.required] }],
    confirmPassword: [
      '',
      { nonNullable: true, validators: [Validators.required] },
    ],
  });

  fields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'role', label: 'Role', type: 'radio', options: ['User', 'Admin'] },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
  ];

  onRegister() {
    const formValue = this.registerForm.value;
    const registrationData = {
      email: formValue.email ?? '',
      role: formValue.role ?? '',
      password: formValue.password ?? '',
      confirmPassword: formValue.confirmPassword ?? '',
    };
    this.authService.register(registrationData).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Registration successful!',
        });
        this.router.navigate(['auth/login']);
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Registration failed: ' + (error.error || 'Unknown error'),
        });
      },
    });
  }
}
