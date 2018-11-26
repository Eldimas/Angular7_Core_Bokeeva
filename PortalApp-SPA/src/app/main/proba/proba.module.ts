import { NgModule } from '@angular/core';
import { ProbaHeaderModule } from './proba-header/proba-header.module';
import { ProbaSampleModule } from './proba-sample/proba-sample.module';

@NgModule({
   imports: [
       ProbaHeaderModule,
       ProbaSampleModule
   ]
    
})
export class ProbaModule{}
