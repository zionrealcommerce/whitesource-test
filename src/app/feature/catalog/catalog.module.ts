import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  }
]
@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CatalogModule { }
