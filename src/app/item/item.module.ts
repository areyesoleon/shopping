import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ItemComponent, ItemListComponent],
  exports: [ItemComponent, ItemListComponent]
})
export class ItemModule { }
