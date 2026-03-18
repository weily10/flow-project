import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../shared/components/shared.module';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { SettingsService } from '../../../core/services/settings.service';
import { Employee } from 'src/app/core/models/Employee';

@Component({
  standalone: true,
  imports: [SharedModule, ɵInternalFormsSharedModule],
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  employees = signal<Employee[]>([]);
  employeeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService,
  ) {
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
  deleteModal: boolean = false;
  selectedEmployee: Employee | null = null;

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
  ];

  stateOptions = [
    { label: 'Active', value: true },
    { label: 'Inactive', value: false },
  ];

  showAddDialog() {
    this.visible = true;
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.settingsService.getEmployees().subscribe((results) => {
      this.employees.set(results);
      console.log('fetched employees:', results);
    });
  }

  openDeleteDialog(employee: Employee) {
    this.deleteModal = true;
    this.selectedEmployee = employee;
  }

  deleteEmployee() {
    if (!this.selectedEmployee) {
      console.error('No employee selected for deletion.');
      return;
    }
    const employeeId = this.selectedEmployee.id;
    console.log('deleting employee with id:', employeeId);

    this.settingsService.deleteEmployee(employeeId).subscribe(() => {
      this.getEmployees();
    });
    this.deleteModal = false;
  }

  editEmployee(employee: Employee) {}

  onSubmit() {
    this.settingsService.addEmployee(this.employeeForm.value).subscribe(() => {
      this.getEmployees();
      this.employeeForm.reset();
      this.visible = false;
    });
  }
}
