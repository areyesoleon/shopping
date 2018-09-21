import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

// Angular material
import { MaterialModule } from './material';
import { LoadinComponent } from './loadin/loadin.component';
import { FunctionsModule } from '../functions/functions.module';
import { PlaceSelectedComponent } from '../functions/place-selected/place-selected.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FunctionsModule
  ],
  declarations: [FooterComponent, HeaderComponent, SidebarComponent, LoadinComponent, PlaceSelectedComponent],
  entryComponents: [PlaceSelectedComponent],
  exports: [FooterComponent, HeaderComponent, SidebarComponent, LoadinComponent]
})
export class SharedModule { }
