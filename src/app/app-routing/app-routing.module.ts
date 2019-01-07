import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../user/routing/routing.module';
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: '../admin/admin.module#AdminModule'
  },
  // {
  //   path: '',
  //   loadChildren: '../user/user.module#UserModule',
  // },
  {
  path: ':something',
  component: UserComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules }),
    CommonModule,
    RoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
