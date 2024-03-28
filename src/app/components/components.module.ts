import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { AdminComponent } from './admin/admin.component';

import { UserprofileComponent } from './userprofile/userprofile.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { MapsComponent } from './maps/maps.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { SidebarComponent } from 'app/shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module, 
        MatFormFieldModule
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        NavbarComponent,
        FooterComponent,
        SidebarComponent,
        TestComponent,
        AdminComponent,
        DashboardComponent,
      //  AdminComponent,
  
         UserprofileComponent,
         TablelistComponent,
         MapsComponent,
         UpgradeComponent, 
         AdminComponent,
       
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
