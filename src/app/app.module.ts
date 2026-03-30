import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/pages/home/home.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptors'; // Your path
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; // Import these
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MessageService, PrimeIcons } from 'primeng/api';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { Toast, ToastModule } from 'primeng/toast';
import { EventComponent } from './features/pages/event/event.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, DashboardLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    AutoCompleteModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    ToastModule,
    FormsModule,
  ],
  providers: [
    provideAnimations(),
    MessageService,
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
