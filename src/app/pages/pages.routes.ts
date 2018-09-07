import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { UserComponent } from './user/user.component';

const pagesRoutes: Routes = [
  { path: 'modules', component: StartComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/modules', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
