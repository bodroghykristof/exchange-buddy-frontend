import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { HttpRequestLoaderInterceptor } from './interceptors/http-request-loader-interceptor';
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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestLoaderInterceptor,
      multi: true
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}