import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes/routes.component';
import { ModuleModule } from '../module/module.module';
import { StartComponent } from './start/start.component';
import { PAGES_ROUTES } from './pages.routes';
import { UserModule } from '../user/user.module';
import { UserPageComponent } from './user-page/user-page.component';
import { PlacePageComponent } from './place-page/place-page.component';
import { PlaceModule } from '../place/place.module';
import { ItemPageComponent } from './item-page/item-page.component';
import { PlaceListPageComponent } from './place-list-page/place-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleModule,
    UserModule,
    PlaceModule,
    PAGES_ROUTES
  ],
  declarations: [RoutesComponent, StartComponent, UserPageComponent, PlacePageComponent, ItemPageComponent, PlaceListPageComponent],
  exports: [RoutesComponent]
})
export class PagesModule { }
