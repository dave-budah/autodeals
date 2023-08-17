import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MakesComponent} from "./makes/makes.component";
import {ModelsComponent} from "./models/models.component";

const routes: Routes = [
  { path: 'makes', component: MakesComponent },
  { path: 'models', component: ModelsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
