import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialogModule } from './login-dialog/login-dialog.module';
import { DynamicFormModule } from '../form-module/form.module';
import { CustomMaterialModule } from '../material.module';
import { FactoryResolverModule } from '../factory-resolver/factory-resolver.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomePanelComponent } from './home-panel/home-panel.component';
import { RoutingModule } from './routing/routing.module';
import { AdminComponent } from './admin.component';
import { SiderbarComponent } from './siderbar/siderbar.component';

@NgModule({
  imports: [
    CommonModule,
    LoginDialogModule,
    RoutingModule,
    FactoryResolverModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormModule,
    CustomMaterialModule,
  ],
  entryComponents: [
  ],
  declarations: [
    HomePanelComponent,
    AdminComponent,
    SiderbarComponent
  ]
})
export class AdminModule { }
