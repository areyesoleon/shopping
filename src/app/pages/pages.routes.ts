import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PlacePageComponent } from './place-page/place-page.component';
import { LoginGuard } from '../guards/login.guard';

const pagesRoutes: Routes = [
  { path: 'modules', canActivate: [LoginGuard], component: StartComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'place', canActivate: [LoginGuard], component: PlacePageComponent },
  { path: '', redirectTo: '/modules', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
