import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule { }
