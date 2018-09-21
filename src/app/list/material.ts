import {
  MatFormFieldModule, MatInputModule, MatCardModule,
  MatIconModule, MatButtonModule, MatTooltipModule,
  MatSnackBarModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatTabsModule, MatCheckboxModule, MatDialogModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatCardModule,
    MatIconModule, MatButtonModule, MatTooltipModule, MatSnackBarModule,
    MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatTabsModule, MatCheckboxModule, MatDialogModule],
  exports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule,
    MatButtonModule, MatTooltipModule, MatSnackBarModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatTabsModule, MatCheckboxModule, MatDialogModule],
})
export class MaterialModule { }
