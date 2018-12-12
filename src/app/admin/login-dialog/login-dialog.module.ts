import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from 'src/app/material.module';
import { LoginDialogComponent } from './login-dialog.component';
// import { LoginDialogContentComponent } from './login-dialog-content/login-dialog-content.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    LoginDialogComponent,
    // LoginDialogContentComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    // LoginDialogContentComponent
  ],
  exports: [
    // ExampleDialogContentComponent
  ]
})
export class LoginDialogModule { }
