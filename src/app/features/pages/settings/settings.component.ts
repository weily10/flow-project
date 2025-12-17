import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/components/shared.module';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { SettingsService } from '../../../core/services/settings.service';

@Component({
  standalone: true,
  imports: [SharedModule, ɵInternalFormsSharedModule],
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder, private settingsService: SettingsService) {


    this.employeeForm = this.fb.group({
      employeeId: ['', Validators.required],
      jobTitle: ['', Validators.required],
      username: ['', Validators.required],
      region: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      manager: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  visible: boolean = false;


  jobTitles = [
    { label: 'Business Analyst', value: 'businessAnalyst' },
    { label: 'Developer', value: 'developer' },
    { label: 'Manager', value: 'manager' },
    { label: 'Intern', value: 'intern' },
  ];


  regions = [
    { label: 'North America', value: 'northAmerica' },
    { label: 'Europe', value: 'europe' },
    { label: 'Asia', value: 'asia' },
    { label: 'Australia', value: 'australia' },
  ];

  managers = [
    { label: 'Samantha', value: 'samantha' },
    { label: 'Orc', value: 'orc' },
    { label: 'Vladimir', value: 'vladimir' },
    { label: 'Ivan', value: 'ivan' },
  ]

  stateOptions = [{ label: 'Active', value: 'Active' }, { label: 'Inactive', value: 'Inactive' }];
  addSalesDep() {
    console.log('sada');
  }

  showAddDialog() {
    this.visible = true;
  }

  get employees() {
    return this.settingsService._employees();
  }



  onSubmit() {
    console.log('dsadas', this.employeeForm);
    if (this.employeeForm.valid) {
      this.employees.push(this.employeeForm.value);
      this.employeeForm.reset();
      this.visible = false;
      console.log('dsadas', this.employees);

    }
  }
}
