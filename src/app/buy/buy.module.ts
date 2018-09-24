import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyListComponent } from './buy-list/buy-list.component';
import { BuyBuyComponent } from './buy-buy/buy-buy.component';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [BuyListComponent, BuyBuyComponent],
  exports: [BuyListComponent, BuyBuyComponent]
})
export class BuyModule { }
