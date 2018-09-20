import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListListComponent } from './list-list/list-list.component';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ListComponent, ListListComponent],
  exports:[ListComponent, ListListComponent]
})
export class ListModule { }
