import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/core/services/main.service';
import { SharedModule } from '../../../shared/components/shared.module';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FormsModule, CommonModule, ReactiveFormsModule, SharedModule],
})
export class HomeComponent {
  constructor(
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
  events: any[] = [
    {
      title: 'Hiking in everest',
      location: 'himalayas',
      date: '2026/07/12',
      summary: 'hiking the highest mountain on earth',
      attenders: 3,
      imgUrl:
        'https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=ibz1ktqV34YlHk0FeSyBcoykG2IVViXNUxU2NLCGsg8=',
    },
    {
      title: 'Patagonia Mountain Hike',
      location: 'Argentina',
      date: '2026/11/05',
      summary: 'Exploring glaciers and rugged peaks',
      attenders: 5,
      imgUrl:
        'https://www.muchbetteradventures.com/magazine/content/images/2025/08/torres_del_paine.jpg',
    },
    {
      title: 'Rocky Mountains Trail',
      location: 'USA',
      date: '2026/09/22',
      summary: 'High altitude hiking with breathtaking views',
      attenders: 13,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9tdpH4xHE6dIfI_YlKW9mxwK3OYWo0bt5A&s',
    },
    {
      title: 'Taroko Gorge Hike',
      location: 'Taiwan',
      date: '2026/05/14',
      summary: 'Walking through marble cliffs and lush forest',
      attenders: 9,
      imgUrl:
        'https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=ibz1ktqV34YlHk0FeSyBcoykG2IVViXNUxU2NLCGsg8=',
    },
  ];
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
  loadItems(e: any) {}

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
}
