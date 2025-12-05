import { Component, NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';  
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';





@Component({
  standalone: true,
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css'],
  imports: [
    AutoCompleteModule, 
    FormsModule, 
    CommonModule, 
    TagModule, 
    TabViewModule, 
    PanelModule, 
    FieldsetModule, 
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule]
})
export class FormpageComponent {
  formGroup: FormGroup;
  value: string = '';
  items: string[] = [];
  cities: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  selectedCity: string = 'New York';



  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      input3: ['', Validators.required],
      input4: ['', Validators.required],
    });
  }

  search(event: any) {
    const q = event.query.toLowerCase();
    this.items = ['Apple', 'Banana', 'Cherry'].filter(x => x.toLowerCase().includes(q));
  }


  loadItems() {
    
  }

}
