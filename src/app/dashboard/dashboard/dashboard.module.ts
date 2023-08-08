import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {UsersComponent} from "../users/users.component";
import {SubscriptionComponent} from "../subscription/subscription.component";
import {ProfileComponent} from "../profile/profile.component";
import {SubmenuComponent} from "../shared/sidenav/submenu.component";
import {DashboardComponent} from "./dashboard.component";
import {SidenavComponent} from "../shared/sidenav/sidenav.component";
import {TopnavComponent} from "../shared/topnav/topnav.component";
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from "@angular/cdk/menu";



@NgModule({
  declarations: [
    UsersComponent,
    SubscriptionComponent,
    ProfileComponent,
    SubmenuComponent,
    DashboardComponent,
    SidenavComponent,
    TopnavComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CdkMenuTrigger,
    CdkMenuItem,
    CdkMenu,
  ],
  exports: [
    SubmenuComponent,
    SidenavComponent,
    TopnavComponent
  ],
})
export class DashboardModule { }
