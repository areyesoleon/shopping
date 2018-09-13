import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSlideToggleModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSlideToggleModule],
  exports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSlideToggleModule],
})
export class MaterialModule { }
