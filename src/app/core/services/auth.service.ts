import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User, RegistrationData } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  register(userData: RegistrationData): Observable<User> {
    // This sends a POST request to http://localhost:8080/api/users/register
    return this.http.post<User>(`${this.apiUrl}/register`, userData);
  }

  login(credentials: User): Observable<User> {
    // This sends a POST request to http://localhost:8080/api/users/login
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // Assuming the response contains a token
        if (response.token) {
          sessionStorage.setItem('authToken', response.token);
        }
      }),
    );
  }

  getToken() {
    return sessionStorage.getItem('authToken');
  }
}
