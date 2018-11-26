import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProbaHeaderComponent } from './proba-header.component';


const routes: Routes = [
  {
    path: 'proba-header',
    component: ProbaHeaderComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
   
  ],
  declarations: [ProbaHeaderComponent]
})
export class ProbaHeaderModule { }
