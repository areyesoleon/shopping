import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes/routes.component';
import { ModuleModule } from '../module/module.module';
import { StartComponent } from './start/start.component';
import { PAGES_ROUTES } from './pages.routes';
import { UserModule } from '../user/user.module';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleModule,
    UserModule,
    PAGES_ROUTES
  ],
  declarations: [RoutesComponent, StartComponent, UserPageComponent],
  exports: [RoutesComponent]
})
export class PagesModule { }
