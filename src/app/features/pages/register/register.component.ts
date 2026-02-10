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
  ) {}
  isLoading = false;
  registerForm = this.fb.group({
    username: ['', { nonNullable: true, validators: [Validators.required] }],
    email: ['', { nonNullable: true, validators: [Validators.required] }],
    password: ['', { nonNullable: true, validators: [Validators.required] }],
    confirmPassword: [
      '',
      { nonNullable: true, validators: [Validators.required] },
    ],
  });

  fields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
  ];

  onRegister() {
    console.log('Register form submitted', this.registerForm.value);
    const formValue = this.registerForm.value;
    const registrationData = {
      username: formValue.username ?? '',
      email: formValue.email ?? '',
      password: formValue.password ?? '',
      confirmPassword: formValue.confirmPassword ?? '',
    };
    this.authService.register(registrationData).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['auth/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);
      },
    });
  }
}
