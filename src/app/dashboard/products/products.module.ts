import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from "./products.component";
import {NewproductsComponent} from "./newproducts/newproducts.component";
import {UsedproductsComponent} from "./usedproducts/usedproducts.component";
import {SparesComponent} from "./spares/spares.component";
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    ProductsComponent,
    NewproductsComponent,
    UsedproductsComponent,
    SparesComponent,
    CreateComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
