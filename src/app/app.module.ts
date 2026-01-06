import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormpageComponent } from './features/pages/formpage/formpage.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PrimeIcons } from 'primeng/api';
import { SettingsComponent } from './features/pages/settings/settings.component';
import { LoginComponent } from './features/pages/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component'; // just for type hints if needed

@NgModule({
  declarations: [AppComponent, LoginComponent, AuthLayoutComponent, DashboardLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormpageComponent,
    AutoCompleteModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
