import {
  MatToolbarModule, MatIconModule, MatButtonModule,
  MatTooltipModule, MatSidenavModule, MatExpansionModule,
  MatProgressBarModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule,
    MatTooltipModule, MatSidenavModule, MatExpansionModule, MatProgressBarModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule,
    MatTooltipModule, MatSidenavModule, MatExpansionModule, MatProgressBarModule],
})
export class MaterialModule { }
