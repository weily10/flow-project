import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    RadioButtonModule,
    CommonModule,
    InputTextModule,
    CardModule,
    TableModule,
    AutoCompleteModule,
    TagModule,
    TabViewModule,
    PanelModule,
    FieldsetModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    SelectButtonModule,
    ReactiveFormsModule,
    FileUploadModule,
    ToastModule,
    CalendarModule,
    EditorModule,
  ],
  exports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TableModule,
    AutoCompleteModule,
    TagModule,
    TabViewModule,
    PanelModule,
    FieldsetModule,
    InputTextModule,
    DropdownModule,
    DialogModule,
    SelectButtonModule,
    ReactiveFormsModule,
    FileUploadModule,
    ToastModule,
    CalendarModule,
    EditorModule,
  ],
})
export class SharedModule {}
