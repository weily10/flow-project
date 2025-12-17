import { Injectable, signal, computed } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
 import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private httpClient: HttpClient) {}

  _employees = signal<Employee[]>([]);
  suggestions = computed(() => this._employees());

  getEmployees(): void {
    let endpoint = `http://localhost:8080/employees`;
 
    this.httpClient
      .get<Employee[]>(endpoint)
      .subscribe((results: Employee[]) => {
        console.log('results', results);
        this._employees.set(results);
      });
  }
}
