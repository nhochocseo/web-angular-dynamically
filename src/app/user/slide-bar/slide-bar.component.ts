import { Component, OnInit } from '@angular/core';
import { dataSlide } from 'src/app/services/dataFace/sidebar.service';
import { Router } from '@angular/router';
import { HelperFunction } from 'src/app/share/helper/helper.function';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.scss']
})
export class SlideBarComponent implements OnInit {
  listSidebarMenu: Array<any>;
  constructor(
    private router: Router,
    private helperFunction: HelperFunction,
  ) { }

  ngOnInit() {
    this.getListMenu();
  }
  getListMenu() {
    this.listSidebarMenu = dataSlide;
  }
  OpenPage(url: any) {
    this.router.navigate(['/chuyen-muc/', this.helperFunction.change_alias(url)]);
  }
}
