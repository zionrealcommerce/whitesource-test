import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RcAppPreloadingStrategy} from '@realcommerce/rc-packages';


const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () => import('./feature/catalog/catalog.module').then(m => m.CatalogModule),
  },
  {
    path: '',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule),
    data: {
      preload: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: RcAppPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
