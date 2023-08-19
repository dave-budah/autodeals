import { NgModule, isDevMode } from '@angular/core';
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
import {DashboardModule} from "./dashboard/dashboard.module";
import {provideState, provideStore, StoreModule} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {authFeatureKey, authReducer} from "./auth/store/auth.reducers";
import * as feedEffects from './public/pages/explore/store/feed.effects';
import * as popularTagsEffect from './public/shared/populartags/store/populartags.effects';
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideEffects} from "@ngrx/effects";
import * as authEffects from 'src/app/auth/store/auth.effects';
import {AuthModule} from "./auth/auth.module";
import { LoadingComponent } from './shared/loading/loading.component';
import { PricingComponent } from './public/pages/pricing/pricing.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {Appdata} from "./appdata";
import {provideRouterStore, routerReducer} from "@ngrx/router-store";
import {AuthInterceptor} from "./shared/interceptors/authInterceptor";
import { FeedComponent } from './public/pages/explore/feed/feed.component';
import {feedFeatureKey, feedReducer} from "./public/pages/explore/store/feed.reducers";
import {TruncatePipe} from "./public/shared/pipes/truncate.pipe";
import { ErrormessageComponent } from './shared/errormessage/errormessage.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { TagsComponent } from './public/shared/tags/tags.component';
import { PopulartagsComponent } from './public/shared/populartags/populartags.component';
import {popularTagsFeatureKey, popularTagsReducer} from "./public/shared/populartags/store/populartags.reducers";
import { FeedtogglerComponent } from './shared/feedtoggler/feedtoggler.component';


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
    ShellComponent,
    LoadingComponent,
    PricingComponent,
    FeedComponent,
    TruncatePipe,
    ErrormessageComponent,
    PaginationComponent,
    TagsComponent,
    PopulartagsComponent,
    FeedtogglerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    DashboardModule,
    AuthModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(Appdata, {delay: 1000}),
    StoreModule.forRoot({}, {}),

  ],
  providers: [
    provideStore({
      router: routerReducer
    }),
    provideHttpClient(withInterceptors([
      AuthInterceptor
    ])),
    provideRouterStore(),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideState(popularTagsFeatureKey, popularTagsReducer),
    provideEffects(authEffects, feedEffects, popularTagsEffect),
    provideStoreDevtools({
       maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    }),
  ],
  exports: [
    BodyComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
