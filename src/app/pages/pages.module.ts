import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes/routes.component';
import { ModuleModule } from '../module/module.module';
import { StartComponent } from './start/start.component';
import { PAGES_ROUTES } from './pages.routes';
import { UserModule } from '../user/user.module';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleModule,
    UserModule,
    PAGES_ROUTES
  ],
  declarations: [RoutesComponent, StartComponent, UserComponent],
  exports: [RoutesComponent]
})
export class PagesModule { }
