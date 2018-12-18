import { Component, OnInit } from '@angular/core';
import { dataSlide } from 'src/app/services/dataFace/sidebar.service';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.scss']
})
export class SlideBarComponent implements OnInit {
  listSidebarMenu: Array<any>;
  constructor() { }

  ngOnInit() {
    this.getListMenu();
  }
  getListMenu() {
    this.listSidebarMenu = dataSlide;
  }
  OpenPage(url: any) {
    console.log(url);
  }

}
