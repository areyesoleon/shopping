import { RouterModule, Routes } from '@angular/router';
import { RoutesComponent } from './pages/routes/routes.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: RoutesComponent,
    loadChildren: './pages/pages.module#PagesModule'
  }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
