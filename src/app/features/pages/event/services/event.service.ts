import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:8080/api/events/add';

  constructor(private http: HttpClient) {}

  saveEvent(eventData: any): Observable<any> {
    return this.http.post(this.apiUrl, eventData);
  }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/events');
  }
}
