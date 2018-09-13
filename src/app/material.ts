import { MatFormFieldModule, MatInputModule, MatCardModule,
  MatIconModule, MatButtonModule, MatTooltipModule,
  MatSnackBarModule, MatCheckboxModule, MatSlideToggleModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule,  MatSnackBarModule, MatCheckboxModule, MatSlideToggleModule],
exports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule,  MatSnackBarModule, MatCheckboxModule, MatSlideToggleModule],
})
export class MaterialModule { }
