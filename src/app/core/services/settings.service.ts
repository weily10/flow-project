import { Injectable, signal, computed } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../models/Employee';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private httpClient: HttpClient) { }

  _employees = signal<Employee[]>([]);
 
  getEmployees(): Observable<Employee[]> {
  return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
}

  addEmployee(employee: Employee) {
    return this.httpClient
      .post<Employee>('http://localhost:8080/employees', employee)
      .pipe(
        tap((newEmployee: Employee) => {
          this._employees.set([
            ...this._employees(),
            newEmployee
          ]);
        })
      );
  }
}
