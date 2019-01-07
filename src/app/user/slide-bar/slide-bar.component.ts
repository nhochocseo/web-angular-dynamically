import { Component, OnInit, ViewChild } from '@angular/core';
import { dataSlide } from 'src/app/services/dataFace/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';
import { HelperFunction } from 'src/app/share/helper/helper.function';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.scss']
})
export class SlideBarComponent implements OnInit {
  listSidebarMenu: Array<any>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  activeLink = '#cecece';
  @ViewChild('ul') ul;
  constructor(
    private router: Router,
    private helperFunction: HelperFunction,
  ) { }

  ngOnInit() {
    this.getListMenu();
    this.setPaddingToNavbar(this.router.url);
    this.router.events.pipe(filter(e => e instanceof NavigationEnd ), takeUntil(this.destroy$)).subscribe((e: NavigationEnd ) => {
      this.setPaddingToNavbar(e.url);
    });
  }
  getListMenu() {
    this.listSidebarMenu = dataSlide;
  }
  OpenPage(url: any) {
    this.router.navigate(['/chuyen-muc/', this.helperFunction.change_alias(url)]);
  }
  setPaddingToNavbar(path) {
    this.ul.nativeElement.className = 'menu-left active';
    const currentMenu = this.listSidebarMenu.filter(menu => {
      // console.log(menu.url);
      // console.log(this.helperFunction.ActiveMenu(path));
      const subpath = this.helperFunction.ActiveMenu(path);
      if (subpath) {
        if (subpath.length > 2) {
          return menu.url == subpath[2];
        }
      }
      // return menu[prop] == path;
    });
    if (currentMenu.length > 0 && !currentMenu[0]['recognizePath']) {
      this.ul.nativeElement.className += ' none-sidebar';
    }
  }
  ckekActiveMenu(url: string) {
    this.listSidebarMenu.filter(menu => {
      // console.log(menu.url);
      // console.log(this.helperFunction.ActiveMenu(path));
      const subpath = this.helperFunction.ActiveMenu(url);
      if (subpath) {
        if (subpath.length > 2) {
          console.log(subpath[2]);
          return subpath[2];
        }
      }
      // return menu[prop] == path;
    });
  }
}
