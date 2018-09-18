import {
  MatToolbarModule, MatIconModule, MatButtonModule,
  MatTooltipModule, MatSidenavModule, MatExpansionModule,
  MatProgressBarModule, MatBottomSheetModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule,
    MatTooltipModule, MatSidenavModule, MatExpansionModule, MatProgressBarModule, MatBottomSheetModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule,
    MatTooltipModule, MatSidenavModule, MatExpansionModule, MatProgressBarModule, MatBottomSheetModule],
})
export class MaterialModule { }
