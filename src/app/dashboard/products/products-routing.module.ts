import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewproductsComponent} from "./newproducts/newproducts.component";
import {UsedproductsComponent} from "./usedproducts/usedproducts.component";
import {SparesComponent} from "./spares/spares.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
   { path: 'new', component: NewproductsComponent },
   { path: 'used', component: UsedproductsComponent },
   { path: 'spares', component: SparesComponent },
   { path: 'create', component: CreateComponent },
   { path: 'update', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
