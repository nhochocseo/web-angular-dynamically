import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home/home.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeAppComponent implements OnInit {
  listMenu: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getListMenu();
  }
  getListMenu() {
    this.homeService.getListDanhMuc().pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.listMenu = res;
    });
  }
}
