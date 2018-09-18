import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceSelectedComponent } from './place-selected/place-selected.component';
import { MaterialModule } from './material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [PlaceSelectedComponent],
  exports: [PlaceSelectedComponent]
})
export class FunctionsModule { }
