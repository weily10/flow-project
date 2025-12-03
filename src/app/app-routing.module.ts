import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormpageComponent } from './features/pages/formpage/formpage.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [
      {   path: '', component: FormpageComponent }
    ]
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
