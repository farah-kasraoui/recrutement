import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutes, } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Import Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { UserprofileComponent } from '../userprofile/userprofile.component';
import { TablelistComponent } from '../tablelist/tablelist.component';
import { MapsComponent } from '../maps/maps.component';
import { NotificationComponent } from '../notification/notification.component';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { TypographyComponent } from '../typography/typography.component';

@NgModule({
  declarations: [
    // DashboardComponent,
    // UserprofileComponent,
    // TablelistComponent,
    // TypographyComponent,
    // MapsComponent,
    // NotificationComponent,
    // UpgradeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class AdminModule { }
