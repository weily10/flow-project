import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
})
export class DashboardLayoutComponent {
  sidebarOpen = true; // default: open

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
    console.log('User logged out');
  }
}
