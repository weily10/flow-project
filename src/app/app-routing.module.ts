import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormpageComponent } from './features/pages/formpage/formpage.component';
import { SettingsComponent } from './features/pages/settings/settings.component';
import { LoginComponent } from './features/pages/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { RegisterComponent } from './features/pages/register/register.component';
import { authGuard } from './core/guards/auth.guards';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: FormpageComponent, pathMatch: 'full' },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },

  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
