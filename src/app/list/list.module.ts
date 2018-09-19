import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListListComponent } from './list-list/list-list.component';
import { MaterialModule } from './material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ListComponent, ListListComponent],
  exports:[ListComponent, ListListComponent]
})
export class ListModule { }
