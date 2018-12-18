import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RoutingModule } from './routing/routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { FactoryResolverModule } from '../factory-resolver/factory-resolver.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormModule } from '../form-module/form.module';
import { CustomMaterialModule } from '../material.module';
import { SlideBarComponent } from './slide-bar/slide-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FactoryResolverModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormModule,
    CustomMaterialModule,
  ],
  declarations: [UserComponent, UserHomeComponent, SlideBarComponent]
})
export class UserModule { }
