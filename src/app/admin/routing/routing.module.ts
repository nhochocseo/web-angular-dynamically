import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { HomePanelComponent } from '../home-panel/home-panel.component';

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
      ]
    },
    // {
    //   path: '**',
    //   component: ErrorComponent,
    // }
  ])],
  exports: [RouterModule]
})
export class RoutingModule { }
