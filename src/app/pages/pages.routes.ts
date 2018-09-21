import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PlacePageComponent } from './place-page/place-page.component';
import { LoginGuard } from '../guards/login.guard';
import { PlaceListPageComponent } from './place-list-page/place-list-page.component';
import { ItemComponent } from '../item/item/item.component';
import { ItemListPageComponent } from './item-list-page/item-list-page.component';
import { ListComponent } from '../list/list/list.component';
import { ListListComponent } from '../list/list-list/list-list.component';

const pagesRoutes: Routes = [
  { path: 'modules', canActivate: [LoginGuard], component: StartComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'place', canActivate: [LoginGuard], component: PlacePageComponent },
  { path: 'place/:id', canActivate: [LoginGuard], component: PlacePageComponent },
  { path: 'place-list', canActivate: [LoginGuard], component: PlaceListPageComponent },
  { path: 'item', canActivate: [LoginGuard], component: ItemComponent },
  { path: 'item/:id', canActivate: [LoginGuard], component: ItemComponent },
  { path: 'item-list', canActivate: [LoginGuard], component: ItemListPageComponent },
  { path: 'list', canActivate: [LoginGuard], component: ListComponent },
  { path: 'list/:id', canActivate: [LoginGuard], component: ListComponent },
  { path: 'list-list', canActivate: [LoginGuard], component: ListListComponent },
  { path: '', redirectTo: '/modules', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
