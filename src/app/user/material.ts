import { MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule,MatSnackBarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule,MatSnackBarModule],
  exports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule,MatSnackBarModule],
})
export class MaterialModule { }
