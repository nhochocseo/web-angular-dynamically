import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FactoryResolverModule } from './factory-resolver/factory-resolver.module';
import { CustomMaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormModule } from './form-module/form.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppInputComponent } from './form-module/app-input/app-input.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { PipeModule } from './share/pipe/module.pipe';
import { HomeAppModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CustomMaterialModule,
    FactoryResolverModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormModule,
    HomeAppModule,
    // AdminModule,
    AppRoutingModule,
    // UserModule,
    // PipeModule,
    LoadingBarModule.forRoot(),
  ],
  exports: [
    // PipeModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppInputComponent]
})
export class AppModule { }
