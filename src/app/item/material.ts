import { MatFormFieldModule, MatInputModule, MatCardModule,
  MatIconModule, MatButtonModule, MatTooltipModule,
  MatSnackBarModule, MatSlideToggleModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule,  MatSnackBarModule, MatSlideToggleModule],
exports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule,  MatSnackBarModule, MatSlideToggleModule],
})
export class MaterialModule { }
