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
import { ItemModule } from '../item/item.module';
import { ItemListPageComponent } from './item-list-page/item-list-page.component';
import { ListModule } from '../list/list.module';
import { ListPageComponent } from './list-page/list-page.component';
import { ListListPageComponent } from './list-list-page/list-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleModule,
    UserModule,
    PlaceModule,
    ItemModule,
    ListModule,
    PAGES_ROUTES
  ],
  declarations: [RoutesComponent, StartComponent,
    UserPageComponent, PlacePageComponent, ItemPageComponent, PlaceListPageComponent,
    ItemListPageComponent,
    ListPageComponent, ListListPageComponent],
  exports: [RoutesComponent]
})
export class PagesModule { }
