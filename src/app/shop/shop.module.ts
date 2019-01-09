import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop.component';
import { CustomMaterialModule } from '../material.module';
import { ShopRoutingModule } from './routing/shop.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    CustomMaterialModule,
  ],
  entryComponents: [
  ],
  declarations: [HomeComponent, ShopComponent]
})
export class ShopModule { }
