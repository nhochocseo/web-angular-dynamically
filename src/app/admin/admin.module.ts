import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';

@NgModule({
  imports: [
    CommonModule,
    DialogLoginComponent
  ],
  declarations: [DialogLoginComponent]
})
export class AdminModule { }
