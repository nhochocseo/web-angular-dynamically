import { Component, OnInit, ViewChild } from '@angular/core';
import { dataSlide } from 'src/app/services/dataFace/sidebar.service';
import { Subject } from 'rxjs';
import { HelperFunction } from 'src/app/share/helper/helper.function';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {
  listSidebarMenu: Array<any>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  activeLink = 'rgb(84, 28, 86)';
  duongdan: string;
  @ViewChild('ul') ul;
  constructor(
    private router: Router,
    private helperFunction: HelperFunction,
  ) { }

  ngOnInit() {
    this.getListMenu();
    this.ckekActiveMenu(this.router.url);
  }

  ckekActiveMenu(url: string) {
      // console.log(this.helperFunction.ActiveMenu(path));
      const subpath = this.helperFunction.ActiveMenu(url);
        if (subpath.length > 2) {
            this.duongdan = subpath[2];
        }
  }
  getListMenu() {
    this.listSidebarMenu = dataSlide;
  }
  OpenPage(url: any) {
    this.ckekActiveMenu(this.router.url);
    this.router.navigate(['/code/chuyen-muc/', this.helperFunction.change_alias(url)]);
  }
  setPaddingToNavbar(path) {
    this.ul.nativeElement.className = 'menu-left active';
    const currentMenu = this.listSidebarMenu.find(menu => {
      const subpath = this.helperFunction.ActiveMenu(path);
      if (subpath) {
        if (subpath.length > 2) {
          return menu.url == subpath[2];
        }
      }
      // return menu[prop] == path;
    });
    if (currentMenu && !currentMenu.url) {
      this.ul.nativeElement.className += ' none-sidebar';
    }
  }
}
