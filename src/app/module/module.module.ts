import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { MaterialModule } from './material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [CardsComponent],
  exports: [CardsComponent]
})
export class ModuleModule { }
