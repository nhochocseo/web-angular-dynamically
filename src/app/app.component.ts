import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DymamicDialogComponent } from './dymamic-dialog/dymamic-dialog.component';
import { ExampleDialogContentComponent } from './dymamic-dialog/example-dialog-content/example-dialog-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  exampleDynamicForm: FormGroup ;
  normalForm: FormGroup;
  options = [
    {
      id: 1,
      value: 'Value 1'
    },
    {
      id: 2,
      value: 'Value 2'
    },
    {
      id: 3,
      value: 'Value 3'
    },
    {
      id: 4,
      value: 'Value 4'
    },
  ]

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
    this.exampleDynamicForm = this.fb.group({
      input: ['', Validators.required],
      select: ['', Validators.required],
      date: ['', Validators.required]
    });
    this.normalForm = this.fb.group({
      input: ['', Validators.required],
    });
    this.normalForm.get('input').valueChanges.subscribe(() => {
      console.log(this.normalForm.get('input'), this.normalForm.get('input').hasError('required') && (this.normalForm.get('input').dirty || this.normalForm.get('input').touched))
    })
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DymamicDialogComponent, {
      width: '250px',
    });
    const customData: any = {
      text: 'Pass anything here'
    }
    dialogRef.componentInstance.data = {
      component: ExampleDialogContentComponent,
      customComponentData: customData
    }
  }
}
