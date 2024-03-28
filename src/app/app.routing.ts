import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { TestComponent } from './components/test/test.component';
import { AdminComponent } from './components/admin/admin.component';

import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { TablelistComponent } from './components/tablelist/tablelist.component';
import { TypographyComponent } from './components/typography/typography.component';
import { MapsComponent } from './components/maps/maps.component';
import { NotificationComponent } from './components/notification/notification.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
   
    { path: 'signup',           component: SignupComponent },
    { path: 'signin',           component: SigninComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'admin',             component: AdminComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'test',      component: TestComponent },
   { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserprofileComponent },
    { path: 'table-list',     component: TablelistComponent },
    { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationComponent },
    { path: 'upgrade',        component: UpgradeComponent },
   
    
    
   
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      //useHash: true
    }),
    [RouterModule.forChild(routes)],
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
