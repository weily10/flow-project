import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UploadEvent } from 'src/app/models/event.model';
import { FileUpload } from 'primeng/fileupload';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { MessageService } from 'primeng/api';
import { EventService } from './services/event.service';

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
    private eventService: EventService,
  ) {
    this.eventForm = this.fb.group({
      fileSource: [null],
      eventTitle: ['', Validators.required],
      attenders: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.imgUrl = '';
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.eventService.saveEvent(this.eventForm.value).subscribe({
        next: (res) => {
          this.events.push(res);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Event Created',
          });
          this.eventForm.reset();
        },
        error(err) {
          console.log(err);
        },
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warn',
        detail: 'form invalid',
      });
    }
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

  saveImage(fileUpload: FileUpload) {
    if (fileUpload.files && fileUpload.files.length > 0) {
      const file = fileUpload.files[0];
      this.imgUrl = URL.createObjectURL(file);
    }

    this.visible = false;

    // Optional: Clear the file selection so the dialog is fresh next time
    fileUpload.clear();
  }

  removePic() {
    this.imgUrl = '';
  }
}
