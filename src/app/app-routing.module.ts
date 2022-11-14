import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { MenuService } from './services/menu-service/menu.service';

@NgModule({
  imports: [RouterModule.forRoot([])],
  providers: [
    {
      provide: ROUTES,
      useFactory: (menuService: MenuService): Routes => {
        return [...menuService.getMenus(), { path: '**',   redirectTo: `/${menuService.defaultMenu.path}`, pathMatch: 'full' }];
      },
      deps: [MenuService],
      multi: true
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}