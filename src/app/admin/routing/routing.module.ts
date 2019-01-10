import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { HomePanelComponent } from '../home-panel/home-panel.component';
import { ShopAdminModule } from '../shop-admin/shop-admin.module';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'admin',
      component: AdminComponent,
      data: { breadcrumbs: 'Trang chủ' },
      children: [
        {
          path: '',
          component: HomePanelComponent,
          pathMatch: 'full'
        },
        {
          path: 'shop',
          // loadChildren: '../shop-admin/shop-admin.module#ShopAdminModule'
          loadChildren: () => ShopAdminModule
        },
      ]
    },
    // {
    //   path: '**',
    //   component: ErrorComponent,
    // }
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
