import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule],
  exports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule],
})
export class MaterialModule { }
