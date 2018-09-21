import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent} from './list/list.component';
import { ListListComponent } from './list-list/list-list.component';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
import { FunctionsModule } from '../functions/functions.module';
import { DialogComponent } from '../functions/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FunctionsModule
  ],
  declarations: [ListComponent, ListListComponent, DialogComponent],
  entryComponents: [DialogComponent],
  exports: [ListComponent, ListListComponent]
})
export class ListModule { }
