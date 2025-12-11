import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/components/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  addEmpGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addEmpGroup = this.fb.group({
      empName: ['', Validators.required],
      empAge: ['', [Validators.required, Validators.min(18)]],
      empPosition: ['', Validators.required],
    });
   }
  visible: boolean = false;
  employees = [
    {
      employeeId: '1000',
      jobTitle: 'business analyst',
      name: 'Walt',
      region: 'Taiwan',
      email: 'walt@gmail.com',
      manager: 'Samantha',
      status: 'Active',
    },
  ];
  addSalesDep() {
    console.log('sada');
  }

  showAddDialog() {
    this.visible = true;
  }

  addJob(event: any) {
    // You can implement logic to filter job titles based on user input
    console.log(event.query);
  }
}
