import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dymamic-dialog',
  templateUrl: './dymamic-dialog.component.html',
  styleUrls: ['./dymamic-dialog.component.css']
})
export class DymamicDialogComponent implements OnInit {
  @ViewChild('target', { read: ViewContainerRef }) vcRef: ViewContainerRef;

  componentRef: ComponentRef<any>;
  data: any;

  constructor(
    public dialogRef: MatDialogRef<DymamicDialogComponent>,
    private resolver: ComponentFactoryResolver
    ) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.vcRef.createComponent(factory);
    // For dynamic component data
    this.componentRef.instance.customData = this.data.customComponentData;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    if (this.vcRef) {
      this.vcRef.clear();
    }
    this.componentRef.destroy();
  }
}
