import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppInputComponent } from './app-input/app-input.component';
import { DynamicInputService } from './app-input/app-input.service';
import { InputTypeTextComponent } from './app-input/input-type-text/input-type-text.component';
import { CustomMaterialModule } from '../material.module';
import { InputTypeSelectComponent } from './app-input/input-type-select/input-type-select.component';
import { InputTypeDateComponent } from './app-input/input-type-date/input-type-date.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  exports: [AppInputComponent],
  declarations: [
    AppInputComponent,
    InputTypeTextComponent,
    InputTypeSelectComponent,
    InputTypeDateComponent,
  ],
  entryComponents: [
    InputTypeTextComponent,
    InputTypeSelectComponent,
    InputTypeDateComponent,
  ],
  providers: [
    DynamicInputService
  ]
})
export class DynamicFormModule { }
