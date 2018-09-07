import {MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSidenavModule, MatExpansionModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSidenavModule, MatExpansionModule ],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSidenavModule, MatExpansionModule ],
})
export class MaterialModule { }
