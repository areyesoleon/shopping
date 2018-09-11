import { MatFormFieldModule, MatInputModule, MatCardModule,
  MatIconModule, MatButtonModule, MatTooltipModule,
  MatSnackBarModule, MatCheckboxModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule,  MatSnackBarModule, MatCheckboxModule],
exports: [MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule,  MatSnackBarModule, MatCheckboxModule],
})
export class MaterialModule { }
