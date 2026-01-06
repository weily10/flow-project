import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    // 1. Perform your login logic here (API calls, etc.)

    // 2. Navigate to the dashboard
    // Since your Formpage is at the path '', this will trigger the DashboardLayout
    this.router.navigate(['/']);
  }
}
