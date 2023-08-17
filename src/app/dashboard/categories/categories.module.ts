import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { MakesComponent } from './makes/makes.component';
import { ModelsComponent } from './models/models.component';


@NgModule({
  declarations: [
    MakesComponent,
    ModelsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
