import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/components/shared.module';
import { AuthFormComponent } from '../../components/auth/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, SharedModule, AuthFormComponent, RouterModule],
  standalone: true,
})
export class LoginComponent {
  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {}
  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });
  fields = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  onLogin() {
    if (this.loginForm.valid) {
      this.router.navigate(['/']);
      console.log(this.loginForm.value);
    }
  }
}
