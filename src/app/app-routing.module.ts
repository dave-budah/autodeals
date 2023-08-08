import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./public/pages/notfound/notfound.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {ExploreComponent} from "./public/pages/explore/explore.component";
import {ShowroomComponent} from "./public/pages/showroom/showroom.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {DetailComponent} from "./public/pages/detail/detail.component";
import {DealersComponent} from "./public/pages/dealers/dealers.component";
import {DealerComponent} from "./public/pages/dealer/dealer.component";
import {ContactComponent} from "./public/pages/contact/contact.component";
import {ShellComponent} from "./dashboard/shell/shell.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'showroom', component: ShowroomComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'dealers', component: DealersComponent },
  { path: 'dealer', component: DealerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: ShellComponent,
    loadChildren: () => import('./dashboard/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
