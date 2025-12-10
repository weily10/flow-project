import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  standalone: true,
  imports: [TableModule],
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
    },
  ];
  addSalesDep() {
    console.log('sada');
  }
}
