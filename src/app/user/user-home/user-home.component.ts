import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from 'src/app/admin/login-dialog/login-dialog.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

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
      // console.log(this.normalForm.get('input'), this.normalForm.get('input').hasError('required') && (this.normalForm.get('input').dirty || this.normalForm.get('input').touched))
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
    });
    const customData: any = {
      text: 'Pass anything here'
    };
  }

}
