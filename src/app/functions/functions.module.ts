import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceSelectedComponent } from './place-selected/place-selected.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlaceSelectedComponent],
  exports: [PlaceSelectedComponent]
})
export class FunctionsModule { }
