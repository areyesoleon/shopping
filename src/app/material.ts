import {
  MatFormFieldModule, MatInputModule, MatCardModule,
  MatIconModule, MatButtonModule, MatTooltipModule,
  MatSnackBarModule, MatCheckboxModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatCardModule,
    MatIconModule, MatButtonModule, MatTooltipModule, MatSnackBarModule, MatCheckboxModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule],
  exports: [MatFormFieldModule, MatInputModule, MatCardModule,
    MatIconModule, MatButtonModule, MatTooltipModule, MatSnackBarModule, MatCheckboxModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule]
})
export class MaterialModule { }
