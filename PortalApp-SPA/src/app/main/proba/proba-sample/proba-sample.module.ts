import { NgModule } from '@angular/core';
import { ProbaSampleComponent } from './proba-sample.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components';

const routes: Routes = [
  {
    path: 'proba-sample',
    component: ProbaSampleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    
    FuseSharedModule,
    FuseWidgetModule
  ],
  declarations: [ProbaSampleComponent]
})
export class ProbaSampleModule { }
