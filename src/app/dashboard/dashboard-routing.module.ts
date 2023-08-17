import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {UsersComponent} from "./users/users.component";
import {ProductsComponent} from "./products/products.component";
import {NewproductsComponent} from "./products/newproducts/newproducts.component";
import {UsedproductsComponent} from "./products/usedproducts/usedproducts.component";
import {SparesComponent} from "./products/spares/spares.component";
import {SubscriptionComponent} from "./subscription/subscription.component";
import {ProfileComponent} from "./profile/profile.component";
import {PricingComponent} from "./pricing/pricing.component";
import {RolesComponent} from "./users/roles/roles.component";
import {UserComponent} from "./users/user/user.component";

const routes: Routes = [
   { path: '', redirectTo: 'dashboard', pathMatch: "full" },
     { path: '', component: DashboardComponent },
     { path: 'users', component: UsersComponent },
     { path: 'user/:id', component: UserComponent },
     { path: 'products',
        loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule)
     },
    { path: 'categories',
        loadChildren: () => import('./categories/categories.module').then((m) => m.CategoriesModule)
     },
     { path: 'subscription', component: SubscriptionComponent },
     { path: 'profile', component: ProfileComponent },
     { path: 'pricing', component: PricingComponent },
     { path: 'roles', component: RolesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
