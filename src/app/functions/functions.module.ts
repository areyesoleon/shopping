import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceSelectedComponent } from './place-selected/place-selected.component';
import { MaterialModule } from './material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [PlaceSelectedComponent],
  exports: [PlaceSelectedComponent]
})
export class FunctionsModule { }
