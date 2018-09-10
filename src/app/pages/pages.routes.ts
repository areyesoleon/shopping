import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PlacePageComponent } from './place-page/place-page.component';

const pagesRoutes: Routes = [
  { path: 'modules', component: StartComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'place', component: PlacePageComponent },
  { path: '', redirectTo: '/modules', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
