import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../admin/login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isShow: any = false;
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
  ShowSidebar() {
    this.isShow = !this.isShow;
  }

}
