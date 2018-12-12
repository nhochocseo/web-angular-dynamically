import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user.component';
import { UserHomeComponent } from '../user-home/user-home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: UserComponent,
      data: { breadcrumbs: 'Trang chủ' },
      children: [
        {
          path: '',
          component: UserHomeComponent,
          pathMatch: 'full'
        },
        // {
        //   path: 'index',
        //   component: UserHomeComponent,
        // }
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
