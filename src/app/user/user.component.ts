import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../admin/login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private dialogLogin: MatDialog
  ) { }

  ngOnInit() {
  }
  openDialogLogin(): void {
    const dialogRef = this.dialogLogin.open(LoginDialogComponent, {
      width: '350px',
    });
  }

}
