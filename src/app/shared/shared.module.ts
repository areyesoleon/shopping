import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

// Angular material
import { MaterialModule } from './material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  exports: [FooterComponent, HeaderComponent, SidebarComponent]
})
export class SharedModule { }
