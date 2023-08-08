import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from "./public/shared/header/header.component";
import {FooterComponent} from "./public/shared/footer/footer.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {ShowroomComponent} from "./public/pages/showroom/showroom.component";
import {NotfoundComponent} from "./public/pages/notfound/notfound.component";
import {ExploreComponent} from "./public/pages/explore/explore.component";
import {DetailComponent} from "./public/pages/detail/detail.component";
import {DealerComponent} from "./public/pages/dealer/dealer.component";
import {ContactComponent} from "./public/pages/contact/contact.component";
import {DealersComponent} from "./public/pages/dealers/dealers.component";
import { ShellComponent } from './dashboard/shell/shell.component';
import { BodyComponent } from './dashboard/body/body.component';
import {DashboardModule} from "./dashboard/dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ShowroomComponent,
    NotfoundComponent,
    ExploreComponent,
    DetailComponent,
    DealerComponent,
    ContactComponent,
    DealersComponent,
    BodyComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    DashboardModule,
  ],
  providers: [],
  exports: [
    BodyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
