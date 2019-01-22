import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../user/routing/routing.module';
import { AdminComponent } from '../admin/admin.component';
import { ShopComponent } from '../shop/shop.component';
import { ShopRoutingModule } from '../shop/routing/shop.routing.module';
import { AdminModule } from '../admin/admin.module';
import { UserModule } from '../user/user.module';
const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
  },
  {
    path: 'admin',
    // loadChildren: '../admin/admin.module#AdminModule'
    loadChildren: () => AdminModule
  },
  {
    path: 'code',
    // loadChildren: '../user/user.module#UserModule'
    loadChildren: () => UserModule
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules }),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
