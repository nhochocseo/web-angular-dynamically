import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DymamicDialogComponent } from './dymamic-dialog.component';
import { ExampleDialogContentComponent } from './example-dialog-content/example-dialog-content.component';
import { CustomMaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    DymamicDialogComponent,
    ExampleDialogContentComponent
  ],
  entryComponents: [
    DymamicDialogComponent,
    ExampleDialogContentComponent
  ],
  exports: [
    // ExampleDialogContentComponent
  ]
})
export class DymamicDialogModule { }
