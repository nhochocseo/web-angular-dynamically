import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { HelperFunction } from 'src/app/share/helper/helper.function';
import { Router } from '@angular/router';
import { dataMenuCategory } from 'src/app/services/dataFace/menu.category.admin.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {
  listSidebarMenu: Array<any>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  myStyles = {
    'background-color': 'rgb(239, 234, 234)',
    'border-bottom': '1px solid #fff'
    };
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
    this.listSidebarMenu = dataMenuCategory;
  }
  OpenPage(url: string) {
    console.log(url);
    this.ckekActiveMenu(this.router.url);
    this.router.navigateByUrl('/' + url);
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
