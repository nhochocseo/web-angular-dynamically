import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: '../user/user.module#UserModule',
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
