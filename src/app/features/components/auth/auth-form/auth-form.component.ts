import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/components/shared.module';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  imports: [ReactiveFormsModule, SharedModule],
  standalone: true,
})
export class AuthFormComponent {
  @Input() form!: FormGroup;
  @Input() fields!: {
    name: string;
    label: string;
    type: string;
  }[];
  @Input() isLoading: boolean = false;

  @Output() submitForm = new EventEmitter<void>();

  onSubmit() {
    this.submitForm.emit();
  }
}
