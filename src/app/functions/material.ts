import { MatListModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatListModule, MatButtonModule],
  exports: [MatListModule, MatButtonModule],
})
export class MaterialModule { }
