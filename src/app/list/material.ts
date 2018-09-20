import {
  MatFormFieldModule, MatInputModule, MatCardModule,
  MatIconModule, MatButtonModule, MatTooltipModule,
  MatSnackBarModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatStepperModule, MatTabsModule, MatListModule, MatCheckboxModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatCardModule,
    MatIconModule, MatButtonModule, MatTooltipModule, MatSnackBarModule,
    MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatStepperModule, MatTabsModule, MatListModule, MatCheckboxModule],
  exports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule,
    MatButtonModule, MatTooltipModule, MatSnackBarModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatStepperModule, MatTabsModule, MatListModule, MatCheckboxModule],
})
export class MaterialModule { }
