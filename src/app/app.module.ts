import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FactoryResolverModule } from './factory-resolver/factory-resolver.module';
import { CustomMaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormModule } from './form-module/form.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppInputComponent } from './form-module/app-input/app-input.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { PipeModule } from './share/pipe/module.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FactoryResolverModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormModule,
    AdminModule,
    AppRoutingModule,
    // PipeModule,
    LoadingBarModule.forRoot(),
  ],
  exports: [
    // PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppInputComponent]
})
export class AppModule { }
