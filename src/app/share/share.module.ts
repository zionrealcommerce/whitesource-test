import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RcUiModule} from '@realcommerce/rc-packages';
import { GeneralPopupComponent } from './general-popup/general-popup.component';


const comps = [
  GeneralPopupComponent
];
@NgModule({
  declarations: [comps],
  imports: [
    CommonModule,
    RcUiModule
  ],
  exports: [RcUiModule, comps]
})
export class ShareModule { }
