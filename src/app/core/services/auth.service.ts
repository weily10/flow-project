import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    // This sends a POST request to http://localhost:8080/api/users/register
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}
