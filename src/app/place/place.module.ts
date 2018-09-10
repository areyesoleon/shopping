import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place/place.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlaceComponent],
  exports: [PlaceComponent]
})
export class PlaceModule { }
