import { Component, OnInit } from '@angular/core';
import { dataPost } from 'src/app/services/dataFace/newpost.service';
import { Router } from '@angular/router';
import { HelperFunction } from 'src/app/share/helper/helper.function';

@Component({
  selector: 'app-chuyen-muc',
  templateUrl: './chuyen-muc.component.html',
  styleUrls: ['./chuyen-muc.component.scss']
})
export class ChuyenMucComponent implements OnInit {
  listPost: Array<any>;
  constructor(
    private router: Router,
    private helperFunction: HelperFunction
  ) { }

  ngOnInit() {
    this.LoadPost();
  }
  LoadPost() {
    this.listPost = dataPost;
  }
  ChiTiet(data: any) {
    this.router.navigate(['/', this.helperFunction.change_alias(data.name) + '_' + data.id]);
  }
}
