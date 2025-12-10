import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormpageComponent } from './features/pages/formpage/formpage.component';
import { SettingsComponent } from './features/pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [
      {   path: '', component: FormpageComponent }
    ]
  },
   {
    path: 'settings',
    pathMatch: 'full',
    component: SettingsComponent
  }
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
