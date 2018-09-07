import { MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  exports: [MatIconModule, MatButtonModule, MatTooltipModule],
})
export class MaterialModule { }
