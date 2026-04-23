import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/core/services/main.service';
import { SharedModule } from '../../../shared/components/shared.module';
import { Router } from '@angular/router';
import { EventService } from '../event/services/event.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FormsModule, CommonModule, ReactiveFormsModule, SharedModule],
})
export class HomeComponent {
  constructor(
    private eventService: EventService,
    private readonly MainService: MainService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.formGroup = this.fb.group({
      appnumber: ['', Validators.required],
      applicant: ['', Validators.required],
      appdate: ['', Validators.required],
      salesAutoComplete: ['', Validators.required],
      salesDepartment: ['', Validators.required],
      customer: ['', Validators.required],
      ou: ['', Validators.required],
      invOrg: ['', Validators.required],
      do: ['', Validators.required],
      appdepartment: ['', Validators.required],
    });
  }
  formGroup: FormGroup;
  events: any[] = [];
  value: string = '';
  items: string[] = [];
  cities: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  selectedCity: string = 'New York';

  get suggestions() {
    return this.MainService._suggestions;
  }

  search(event: any) {
    const q = event.query.toLowerCase();
    this.items = ['Apple', 'Banana', 'Cherry'].filter((x) =>
      x.toLowerCase().includes(q),
    );
  }
  loadItems() {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
      },
      error: (err) => {
        console.error('error', err);
      },
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    } else {
      console.log('Form is invalid');
    }
  }

  getAutoCompleteSuggestions(e: any) {
    this.MainService.getAutoCompleteSuggestions(e);
  }

  toEventPage() {
    this.router.navigate(['/event']);
  }

  ngOnInit() {
    this.loadItems();
  }
}
