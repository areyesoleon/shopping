import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place/place.component';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
import { PlaceListComponent } from './place-list/place-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [PlaceComponent, PlaceListComponent],
  exports: [PlaceComponent, PlaceListComponent]
})
export class PlaceModule { }
