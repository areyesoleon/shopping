import { RouterModule, Routes } from '@angular/router';
import { RoutesComponent } from './pages/routes/routes.component';

const appRoutes: Routes = [
  {path: '', component: RoutesComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
