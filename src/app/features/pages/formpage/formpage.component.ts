import { Component, NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';




@Component({
  standalone: true,
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css'],
  imports: [AutoCompleteModule, FormsModule, CommonModule, TagModule, TabViewModule, PanelModule, FieldsetModule, ReactiveFormsModule]
})
export class FormpageComponent {
  formGroup: FormGroup;
  value: string = '';
  items: string[] = [];



  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      form1: ['', Validators.required]
    });
  }

  search(event: any) {
    const q = event.query.toLowerCase();
    this.items = ['Apple', 'Banana', 'Cherry'].filter(x => x.toLowerCase().includes(q));
  }

}
