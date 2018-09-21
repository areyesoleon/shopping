import { MatListModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatListModule, MatButtonModule, MatIconModule],
  exports: [MatListModule, MatButtonModule, MatIconModule],
})
export class MaterialModule { }
