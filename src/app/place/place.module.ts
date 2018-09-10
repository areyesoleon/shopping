import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place/place.component';
import { MaterialModule } from './material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [PlaceComponent],
  exports: [PlaceComponent]
})
export class PlaceModule { }
