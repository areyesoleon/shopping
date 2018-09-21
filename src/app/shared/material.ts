import {
  MatToolbarModule, MatIconModule, MatButtonModule,
  MatTooltipModule, MatSidenavModule, MatExpansionModule,
  MatProgressBarModule, MatBottomSheetModule, MatListModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule,
    MatTooltipModule, MatSidenavModule, MatExpansionModule, MatProgressBarModule, MatBottomSheetModule, MatListModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule,
    MatTooltipModule, MatSidenavModule, MatExpansionModule, MatProgressBarModule, MatBottomSheetModule, MatListModule],
})
export class MaterialModule { }
