import { Injectable, signal,computed } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}

  _suggestions = signal<string[]>([]);
  suggestions = computed(() => this._suggestions());

  getAutoCompleteSuggestions(event: { query: string }): void {
    console.log('aaaa',event);
    
  }
}
