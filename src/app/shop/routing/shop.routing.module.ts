import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopComponent } from '../shop.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ShopComponent,
      data: { breadcrumbs: 'Trang chủ SHop' },
      children: [
        {
          path: '',
          component: HomeComponent,
          pathMatch: 'full'
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
export class ShopRoutingModule { }
