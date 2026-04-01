import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UploadEvent } from 'src/app/models/event.model';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { MessageService } from 'primeng/api';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  events: Array<{
    eventTitle: string;
    attenders: string;
    date: string;
    location: string;
    description: string;
  }> = [];
  eventForm: FormGroup;
  imgUrl: string = '';
  visible: boolean = false;
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
  ) {
    this.eventForm = this.fb.group({
      eventTitle: '',
      attenders: '',
      date: '',
      location: '',
      description: '',
    });
  }

  ngOnInit() {
    this.imgUrl = '';
  }

  onSubmit() {
    this.events.push(this.eventForm.value);
  }

  onUpload(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  }

  openUploadDialog() {
    this.visible = true;
  }
}
