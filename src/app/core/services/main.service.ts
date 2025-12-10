import { Injectable, signal, computed } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private httpClient: HttpClient) {}

  _suggestions = signal<string[]>([]);
  suggestions = computed(() => this._suggestions());

  getAutoCompleteSuggestions(event: { query: string }): void {
    let endpoint = `http://localhost:8080/items`;
    let query = (event.query ?? '').toLowerCase();

    this.httpClient
      .get<Item[]>(endpoint)
      .pipe(
        map((items: Item[]) =>
          items
            .map((item) => item.title)
            .filter((title) => title.toLowerCase().includes(query))
        )
      )
      .subscribe((results: string[]) => {
        console.log('results', results);
        this._suggestions.set(results);
      });
  }
}
