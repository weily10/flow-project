import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/components/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
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
}
