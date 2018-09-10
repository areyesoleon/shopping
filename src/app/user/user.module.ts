import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MaterialModule } from './material';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule { }
