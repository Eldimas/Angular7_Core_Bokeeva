import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconModule } from '@angular/material';


const routes: Routes = [
  {
    path: 'admin-users',
    component: AdminUsersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatIconModule,
    MatTableModule,
    FuseSharedModule,
    FuseWidgetModule
  ],
  declarations: [
    AdminUsersComponent

  ]
})
export class AdminUsersModule { }
